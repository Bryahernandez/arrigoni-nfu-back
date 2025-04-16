import Cut from "../models/cut";
import { Request, Response } from "express";
import DocumentItem from "../models/documentItem";
import Document from "../models/document";

export const getCuts = async (req: Request, res: Response) => {
    const cuts = await Cut.findMany({
        where: {
            deletedAt: null,
        },
    });
    res.json(cuts);
}

export const getCut = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const cut = await Cut.findUnique({
            where: {
                cutId: parseInt(id),
            },
        });
        if (cut) {
            res.json(cut);
        } else {
            res.status(404).json({
                msg: `No existe corte con el id ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener el corte'
        });
    }
}

export const getCutsByReactor = async (req: Request, res: Response) => {

    const { reactorId } = req.params;
    try {
        const cuts = await Cut.findMany({
            where: {
                reactorId: parseInt(reactorId),
                deletedAt: null,
                inReactor: true,
            },
            include: {
                documentItem: true,
                reactor: true,
            }
        });
        res.json(cuts);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener los cortes'
        });
    }

}

export const getCutByCoincidence = async (req: Request, res: Response) => {

    const { cutId } = req.params;
    try {
        const cut = await Cut.findFirst({
            where: {
                cutId: parseInt(cutId),
                reactorId: null,
            },
            include: {
                reactor: true,
                documentItem: { include: { cuts: true } }
            }
        });

        res.json(cut);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener el corte'
        });
    }

}

export const postCut = async (req: Request, res: Response) => {

    const { body } = req;
    try {
        const cut = await Cut.create({
            data: {
                cutNumber: body.cutNumber,
                cutDate: body.cutDate,
                cutWeight: body.cutWeight,
                documentItemId: body.documentItemId,
            },
        });
        res.json(cut)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al registrar el corte'
        },
        );
    }
}

export const putCut = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
    try {
        const cut = await Cut.findUnique({
            where: {
                cutId: parseInt(id),
            },
        });
        if (!cut) {
            return res.status(404).json({
                msg: `No existe corte con el id ${id}`
            });
        }

        await Cut.update({
            where: {
                cutId: parseInt(id),
            },
            data: {
                cutNumber: body.cutNumber,
                cutWeight: body.cutWeight,
                documentItemId: body.documentItemId,
                inReactor: body.inReactor,
                reactorId: body.reactorId,
                cutStateId: body.cutStateId,
            },
        });

        const updatedCut = await Cut.findUnique({
            where: {
                cutId: parseInt(id),
            },
            include: {
                documentItem: { include: { cuts: true } }
            }
        });
        res.json(updatedCut);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al actualizar el corte'
        });
    }
}

export const deleteCut = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const cut = await Cut.findUnique({
            where: {
                cutId: parseInt(id),
            },
        });
        if (!cut) {
            return res.status(404).json({
                msg: `No existe corte con el id ${id}`
            });
        }
        await Cut.update({
            where: {
                cutId: parseInt(id),
            },
            data: {
                deletedAt: new Date(),
            },
        });
        res.json(cut);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al desactivar el corte'
        });
    }
}

export const deleteFromReactor = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const cut = await Cut.findUnique({
            where: {
                cutId: parseInt(id),
            },
            include: {
                documentItem: true
            }
        });
        if (!cut) {
            return res.status(404).json({
                msg: `No existe corte con el id ${id}`
            });
        }
        await Cut.update({
            where: {
                cutId: parseInt(id),
            },
            data: {
                inReactor: false,
                reactorId: null,
            },
        });
        res.json(cut);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al desactivar el corte'
        });
    }
}

export const finishFromReactor = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const cut = await Cut.findUnique({
            where: {
                cutId: parseInt(id),
            },
            include: {
                documentItem: { include: { cuts: true } }
            }
        });
        if (!cut) {
            return res.status(404).json({
                msg: `No existe corte con el id ${id}`
            });
        }
        await Cut.update({
            where: {
                cutId: parseInt(id),
            },
            data: {
                cutStateId: 3,
                inReactor: false,
            },
        });

        const cuts = await Cut.findUnique({
            where: {
                cutId: parseInt(id),
            },
            include: {
                documentItem: { include: { cuts: true } }
            }
        });

        if (cuts?.documentItem.cuts.every(cut => cut.cutStateId === 3)) {
            await DocumentItem.update({
                where: {
                    documentItemId: cuts.documentItem.documentItemId,
                },
                data: {
                    stateId: 4,
                },
            });
            const items = await DocumentItem.findUnique({
                where: {
                    documentItemId: cuts.documentItem.documentItemId,
                },
                include: {
                    document: { include: { items: true } }
                }
            });
            if (items?.document.items.every(item => item.stateId === 4)) {
                await Document.update({
                    where: {
                        documentId: items.document.documentId,
                    },
                    data: {
                        stateId: 4,
                    },
                });

            }
        }

        res.json(cut);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al desactivar el corte'
        });
    }
}

export const startInReactor = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const cut = await Cut.findUnique({
            where: {
                cutId: parseInt(id),
            },
            include: {
                documentItem: true
            }
        });
        if (!cut) {
            return res.status(404).json({
                msg: `No existe corte con el id ${id}`
            });
        }
        await Cut.update({
            where: {
                cutId: parseInt(id),
            },
            data: {
                cutStateId: 2,
            },
        });

        res.json(cut);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al desactivar el corte'
        });
    }
}




