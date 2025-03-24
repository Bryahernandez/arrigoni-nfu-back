import { Request, Response } from "express";
import DocumentItem from "../models/documentItem";

export const getItems = async (req: Request, res: Response) => {
    const documentItems = await DocumentItem.findMany({
        where: {
            deletedAt: null,
        },
    });
    res.json(documentItems);
}

export const getItem = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const documentItem = await DocumentItem.findUnique({
            where: {
                documentItemId: parseInt(id),
                deletedAt: null,
            },
        });
        if (documentItem) {
            res.json(documentItem);
        } else {
            res.status(404).json({
                msg: `No existe item con el id ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener el item'
        });
    }
}

export const getItemsByFuego = async (req: Request, res: Response) => {

    const { fuego } = req.params;
    try {
        const documentItem = await DocumentItem.findMany({
            where: {
                fuego: fuego,
                cuts: {
                    none: {},
                },
                deletedAt: null,
            },
        });
        if (documentItem) {
            res.json(documentItem[0]);
        } else {
            res.status(404).json({
                msg: `No existen items con el fuego ${fuego}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener los items con el fuego'
        });
    }
}

export const getItemsByMatricula = async (req: Request, res: Response) => {

    const { matricula } = req.params;
    try {
        const documentItem = await DocumentItem.findMany({
            where: {
                matricula: matricula,
                cuts: {
                    none: {},
                },
                deletedAt: null,
            },
        });
        if (documentItem) {

            res.json(documentItem[0]);
        } else {
            res.status(404).json({
                msg: `No existen items con la matricula ${matricula}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener los items con la matricula'
        });
    }
}

export const getItemsByMatriculaWithCuts = async (req: Request, res: Response) => {

    const { matricula } = req.params;
    try {
        const documentItem = await DocumentItem.findMany({
            where: {
                matricula: matricula,
                cuts: {
                    some: {
                    }
                },
                deletedAt: null,
            },
            include: {
                cuts: {
                    where: {
                        deletedAt: null,
                    },
                }
                , document: true,
            }
        });
        if (documentItem) {

            res.json(documentItem[0]);
        } else {
            res.status(404).json({
                msg: `No existen items con la matricula ${matricula}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener los items con la matricula'
        });
    }
}

export const getItemsCutsByFuego = async (req: Request, res: Response) => {

    const { fuego } = req.params;
    try {
        const documentItem = await DocumentItem.findMany({
            where: {
                fuego: fuego,
                cuts: {
                    some: {},
                },
                deletedAt: null,
            },
            include: {
                cuts: {
                    where: {
                        deletedAt: null,
                    },
                }, document: true,
            }
        });
        if (documentItem) {
            res.json(documentItem[0]);
        } else {
            res.status(404).json({
                msg: `No existen items con el fuego ${fuego}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener los items con el fuego'
        });
    }
}

export const getItemsCutsByMatricula = async (req: Request, res: Response) => {

    const { matricula } = req.params;
    try {
        const documentItem = await DocumentItem.findMany({
            where: {
                matricula: matricula,
                cuts: {
                    some: {},
                },
                deletedAt: null,
            },
            include: {
                cuts: {
                    where: {
                        deletedAt: null,
                    },
                },
            }
        });
        if (documentItem) {
            res.json(documentItem[0]);
        } else {
            res.status(404).json({
                msg: `No existen items con la matricula ${matricula}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener los items con la matricula'
        });
    }
}

export const getItemsByDocument = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const documentItems = await DocumentItem.findMany({
            where: {
                documentId: parseInt(id),
                deletedAt: null,
            },
        });
        if (documentItems) {
            res.json(documentItems);
        } else {
            res.status(404).json({
                msg: `No existen tems con el documento ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener los items del documento'
        });
    }
}

export const postItem = async (req: Request, res: Response) => {

    const { body } = req;
    try {
        const documentItem = await DocumentItem.create({
            data: {
                documentId: body.documentId,
                stateId: body.stateId,
                fuego: body.fuego,
                matricula: body.matricula,
                typeId: body.typeId,
            },
        });
        res.json(documentItem)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al registrar el item'
        },
        );
    }
}

export const putItem = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
    try {
        const documentItem = await DocumentItem.findUnique({
            where: {
                documentItemId: parseInt(id),
            },
        });
        if (!documentItem) {
            return res.status(404).json({
                msg: `No existe item con el id ${id}`
            });
        }

        const { documentItemId, ...data } = body;

        const updatedDocumentItem = await DocumentItem.update({
            where: {
                documentItemId: parseInt(id),
            },
            data: data,
            include: {
                document: { include: { items: true } }
            }
        });
        res.json(updatedDocumentItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al actualizar el item'
        });
    }
}

export const deleteItem = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const deleteItem = await DocumentItem.findUnique({
            where: {
                documentItemId: parseInt(id),
            },
        });
        if (!deleteItem) {
            return res.status(404).json({
                msg: `No existe item con el id ${id}`
            });
        }
        await DocumentItem.update({
            where: {
                documentItemId: parseInt(id),
            },
            data: {
                deletedAt: new Date(),
            },
        });

        res.json(deleteItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al desactivar el item'
        });
    }
}


