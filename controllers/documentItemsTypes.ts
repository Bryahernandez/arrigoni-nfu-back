import DocumentItemType from "../models/documentItemsType";
import { Request, Response } from "express";

export const getItemTypes = async (req: Request, res: Response) => {
    const itemTypes = await DocumentItemType.findMany({
        where: {
            deletedAt: null,
        },
    });
    res.json(itemTypes);
}

export const getItemType = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const itemType = await DocumentItemType.findUnique({
            where: {
                documentItemTypeId: parseInt(id),
            },
        });
        if (itemType) {
            res.json(itemType);
        } else {
            res.status(404).json({
                msg: `No existe tipo de documento con el id ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener el tipo de documento'
        });
    }
}

export const postItemType = async (req: Request, res: Response) => {

    const { body } = req;
    try {
        const itemType = await DocumentItemType.create({
            data: {
                name: body.name,
            },
        });
        res.json(itemType)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al registrar el tipo de documento'
        },
        );
    }
}

export const putItemType = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
    try {
        const itemType = await DocumentItemType.findUnique({
            where: {
                documentItemTypeId: parseInt(id),
            },
        });
        if (!itemType) {
            return res.status(404).json({
                msg: `No existe tipo de documento con el id ${id}`
            });
        }

        const updatedItemType = await DocumentItemType.update({
            where: {
                documentItemTypeId: parseInt(id),
            },
            data: body,
        });
        res.json(updatedItemType);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al actualizar el tipo de documento'
        });
    }
}

export const deleteItemType = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const itemType = await DocumentItemType.findUnique({
            where: {
                documentItemTypeId: parseInt(id),
            },
        });
        if (!itemType) {
            return res.status(404).json({
                msg: `No existe tipo de documento con el id ${id}`
            });
        }
        await DocumentItemType.update({
            where: {
                documentItemTypeId: parseInt(id),
            },
            data: {
                deletedAt: new Date(),
            },
        });
        res.json(itemType);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al desactivar el tipo de documento'
        });
    }
}



