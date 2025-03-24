import DocumentItemState from "../models/documentItemState";
import { Request, Response } from "express";

export const getItemStates = async (req: Request, res: Response) => {
    const itemStates = await DocumentItemState.findMany({
        where: {
            deletedAt: null,
        },
    });
    res.json(itemStates);
}

export const getItemState = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const itemState = await DocumentItemState.findUnique({
            where: {
                documentItemStateId: parseInt(id),
            },
        });
        if (itemState) {
            res.json(itemState);
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

export const postItemState = async (req: Request, res: Response) => {

    const { body } = req;
    try {
        const itemState = await DocumentItemState.create({
            data: {
                name: body.name,
            },
        });
        res.json(itemState)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al registrar el estado de documento'
        },
        );
    }
}

export const putItemState = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
    try {
        const itemState = await DocumentItemState.findUnique({
            where: {
                documentItemStateId: parseInt(id),
            },
        });
        if (!itemState) {
            return res.status(404).json({
                msg: `No existe estado de documento con el id ${id}`
            });
        }

        const updatedItemState = await DocumentItemState.update({
            where: {
                documentItemStateId: parseInt(id),
            },
            data: body,
        });
        res.json(updatedItemState);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al actualizar el estado de documento'
        });
    }
}

export const deleteItemState = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const itemState = await DocumentItemState.findUnique({
            where: {
                documentItemStateId: parseInt(id),
            },
        });
        if (!itemState) {
            return res.status(404).json({
                msg: `No existe estado de documento con el id ${id}`
            });
        }
        await DocumentItemState.update({
            where: {
                documentItemStateId: parseInt(id),
            },
            data: {
                deletedAt: new Date(),
            },
        });
        res.json(itemState);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al desactivar el estado de documento'
        });
    }
}



