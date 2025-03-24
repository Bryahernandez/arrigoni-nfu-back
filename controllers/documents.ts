import Document from "../models/document";
import { Request, Response } from "express";

export const getDocuments = async (req: Request, res: Response) => {
    const documents = await Document.findMany(
        {
            where: {
                deletedAt: null,
            },
            include: {
                company: true,
                user: true,
            }
        }
    );
    res.json(documents);
}

export const getDocumentsClientSummary = async (req: Request, res: Response) => {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    const documents = await Document.findMany(
        {
            where: {
                deletedAt: null,
                egressDate: {
                    gte: firstDayOfMonth,
                },
            },
            include: {
                company: true,
                user: true,
                state: true,
                items: {
                    where: {
                        deletedAt: null,
                    },
                    include: {
                        type: true,
                        state: true,
                        document: true,
                        cuts: { include: { reactor: true, cutState: true } },
                    },

                },

            },
            orderBy: {
                egressDate: 'desc',
            },
        }
    );
    res.json(documents);
}

export const getDocumentsProducerSummary = async (req: Request, res: Response) => {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const { id } = req.params;
    const documents = await Document.findMany(
        {
            where: {
                companyId: parseInt(id),
                deletedAt: null,
                egressDate: {
                    gte: firstDayOfMonth,
                },
            },
            include: {
                company: true,
                user: true,
                state: true,
                items: {
                    where: {
                        deletedAt: null,
                    },
                    include: {
                        type: true,
                        state: true,
                        document: true,
                        cuts: { include: { cutState: true } },
                    }
                },

            },
            orderBy: {
                egressDate: 'desc',
            },
        }
    );
    res.json(documents);
}

export const getDocument = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const document = await Document.findUnique({
            where: {
                documentId: parseInt(id),
                deletedAt: null,
            },
            include: {
                company: true,
                user: true,
                items: {
                    where: {
                        deletedAt: null,
                    },
                    include: {
                        state: true,
                        type: true,
                    },
                },
            },
        },);
        if (document) {
            res.json(document);
        } else {
            res.status(404).json({
                msg: `No existe documento con el id ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener el documento'
        });
    }
}

export const getDocumentsByCompany = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const document = await Document.findMany({
            where: {
                companyId: parseInt(id),
                deletedAt: null,
            },
        });
        if (document) {
            res.json(document);
        } else {
            res.status(404).json({
                msg: `No existen documentos con el usuario ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener los documentos del usuario'
        });
    }
}

export const postDocument = async (req: Request, res: Response) => {

    const { body } = req;
    try {
        const document = await Document.create({
            data: {
                guia: body.guia,
                weight: body.weight,
                egressDate: body.egressDate,
                ingressDate: body.ingressDate,
                companyId: body.companyId,
                user2Id: body.user2Id,
                userId: body.userId,
                observation: body.observation,
                stateId: body.stateId,
            },
        });
        res.json(document)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al registrar el documento'
        },
        );
    }
}

export const putDocument = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
    try {
        const document = await Document.findUnique({
            where: {
                documentId: parseInt(id),
            },
        });
        if (!document) {
            return res.status(404).json({
                msg: `No existe documento con el id ${id}`
            });
        }

        const { documentId, ...data } = body;

        const updatedDocument = await Document.update({
            where: {
                documentId: parseInt(id),
            },
            data: data,
        });
        res.json(updatedDocument);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al actualizar el documento'
        });
    }
}

export const deleteDocument = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const document = await Document.findUnique({
            where: {
                documentId: parseInt(id),
            },
        });
        if (!document) {
            return res.status(404).json({
                msg: `No existe documento con el id ${id}`
            });
        }
        await Document.update({
            where: {
                documentId: parseInt(id),
            },
            data: {
                deletedAt: new Date(),
            },
        });
        res.json(document);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al desactivar el documento'
        });
    }
}



