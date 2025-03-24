import DocumentStates from "../models/documentState";
import { Request, Response } from "express";

export const getStates = async (req: Request, res: Response) => {
    const documentStates = await DocumentStates.findMany({
        where: {
            deletedAt: null,
        },
    });
    res.json(documentStates);
}

export const getState = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const documentState = await DocumentStates.findUnique({
            where: {
                documentStateId: parseInt(id),
            },
        });
        if (documentState) {
            res.json(documentState);
        } else {
            res.status(404).json({
                msg: `No existe estado de documento con el id ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener el estado de documento'
        });
    }
}

export const postState = async (req: Request, res: Response) => {

    const { body } = req;
    try {
        const documentState = await DocumentStates.create({
            data: {
                name: body.name,
            },
        });
        res.json(documentState)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al registrar el estado de documento'
        },
        );
    }
}

export const putState = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
    try {
        const documentState = await DocumentStates.findUnique({
            where: {
                documentStateId: parseInt(id),
            },
        });
        if (!documentState) {
            return res.status(404).json({
                msg: `No existe estado de documento con el id ${id}`
            });
        }

        const updatedDocumentState = await DocumentStates.update({
            where: {
                documentStateId: parseInt(id),
            },
            data: body,
        });
        res.json(updatedDocumentState);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al actualizar el estado de documento'
        });
    }
}

export const deleteState = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const documentState = await DocumentStates.findUnique({
            where: {
                documentStateId: parseInt(id),
            },
        });
        if (!documentState) {
            return res.status(404).json({
                msg: `No existe estado de documento con el id ${id}`
            });
        }
        await DocumentStates.update({
            where: {
                documentStateId: parseInt(id),
            },
            data: {
                deletedAt: new Date(),
            },
        });
        res.json(documentState);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al desactivar el estado de documento'
        });
    }
}



