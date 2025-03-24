
import { Request, Response } from "express";
import GranelTag from "../models/granelTag";

export const getGranelTags = async (req: Request, res: Response) => {
    const granelTags = await GranelTag.findMany({
        where: {
            deletedAt: null,
        },
    });
    res.json(granelTags);
}

export const getGranelTag = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const granelTag = await GranelTag.findUnique({
            where: {
                granelTagId: parseInt(id),
                deletedAt: null,
            },
        });
        if (granelTag) {
            res.json(granelTag);
        } else {
            res.status(404).json({
                msg: `No existe tag con el id ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener el tag'
        });
    }
}


export const getTagsByReactor = async (req: Request, res: Response) => {

    const { reactorId } = req.params;
    try {
        const tags = await GranelTag.findMany({
            where: {
                reactorId: parseInt(reactorId),
                deletedAt: null,
                inReactor: true,
            },
            include: {
                reactor: true,
            }
        });
        res.json(tags);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener las etiquetas'
        });
    }

}

export const getTagByCoincidence = async (req: Request, res: Response) => {

    const { tagId } = req.params;
    try {
        const tag = await GranelTag.findFirst({
            where: {
                granelTagId: parseInt(tagId),
                reactorId: null,
            },
            include: {
                reactor: true,
            }
        });

        res.json(tag);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener la etiqueta'
        });
    }

}

export const postGranelTag = async (req: Request, res: Response) => {

    const { body } = req;
    try {
        const granelTag = await GranelTag.create({
            data: {
                peso: body.peso,
                userId: body.userId,
                type: body.type,
            },
        });
        res.json(granelTag)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al registrar el tag'
        },
        );
    }
}

export const putGranelTag = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
    try {
        const granelTag = await GranelTag.findUnique({
            where: {
                granelTagId: parseInt(id),
            },
        });
        if (!granelTag) {
            return res.status(404).json({
                msg: `No existe tag con el id ${id}`
            });
        }

        // Exclude granelTagId from the body object
        const { granelTagId, ...data } = body;

        const updatedGranelTag = await GranelTag.update({
            where: {
                granelTagId: parseInt(id),
            },
            data: data,
        });
        res.json(updatedGranelTag);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al actualizar el tag'
        });
    }
}

export const deleteGranelTag = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const granelTag = await GranelTag.findUnique({
            where: {
                granelTagId: parseInt(id),
            },
        });
        if (!getGranelTag) {
            return res.status(404).json({
                msg: `No existe tag con el id ${id}`
            });
        }
        await GranelTag.update({
            where: {
                granelTagId: parseInt(id),
            },
            data: {
                deletedAt: new Date(),
            },
        });
        res.json(granelTag);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al desactivar el tag'
        });
    }
}



