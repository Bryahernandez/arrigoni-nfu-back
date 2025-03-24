import Reactor from "../models/reactor";
import { Request, Response } from "express";

export const getAllReactors = async (req: Request, res: Response) => {
    const reactors = await Reactor.findMany({
        where: {
            deletedAt: null,
        },
    });
    res.json(reactors);
}

export const getReactors = async (req: Request, res: Response) => {
    const reactors = await Reactor.findMany({
        where: {
            deletedAt: null,
        },
        include: {
            cuts: {
                where: {
                    inReactor: true,
                    deletedAt: null,
                },
            },
            granelTag: {
                where: {
                    deletedAt: null,
                    inReactor: true,
                }
            }
        },
    });
    res.json(reactors);
}

export const getReactor = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const reactor = await Reactor.findUnique({
            where: {
                reactorId: parseInt(id),
            },
            include: {
                cuts: {
                    where: {
                        inReactor: true,
                        deletedAt: null,
                    },
                    include: {
                        documentItem: true
                    }
                },
                granelTag: {
                    where: {
                        deletedAt: null,
                        inReactor: true,
                    }
                }
            }
        });
        if (reactor) {
            res.json(reactor);
        } else {
            res.status(404).json({
                msg: `No existe reactor con el id ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener el reactor'
        });
    }
}

export const postReactor = async (req: Request, res: Response) => {

    const { body } = req;
    try {
        const reactor = await Reactor.create({
            data: {
                name: body.name,
            },
        });
        res.json(reactor)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al registrar el reactor'
        },
        );
    }
}

export const putReactor = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
    try {
        const reactor = await Reactor.findUnique({
            where: {
                reactorId: parseInt(id),
            },
        });
        if (!reactor) {
            return res.status(404).json({
                msg: `No existe reactor con el id ${id}`
            });
        }

        const updatedReactor = await Reactor.update({
            where: {
                reactorId: parseInt(id),
            },
            data: body,
        });
        res.json(updatedReactor);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al actualizar el reactor'
        });
    }
}

export const deleteReactor = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const reactor = await Reactor.findUnique({
            where: {
                reactorId: parseInt(id),
            },
        });
        if (!reactor) {
            return res.status(404).json({
                msg: `No existe reactor con el id ${id}`
            });
        }
        await Reactor.update({
            where: {
                reactorId: parseInt(id),
            },
            data: {
                deletedAt: new Date(),
            },
        });
        res.json(reactor);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al desactivar el reactor'
        });
    }
}

export const chargeReactor = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const reactor = await Reactor.findUnique({
            where: {
                reactorId: parseInt(id),
            },
        });
        if (!reactor) {
            return res.status(404).json({
                msg: `No existe corte con el id ${id}`
            });
        }
        await Reactor.update({
            where: {
                reactorId: parseInt(id),
            },
            data: {
                closed: true,
            },
        });
        res.json(reactor);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al desactivar el corte'
        });
    }
}

export const finishReactor = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const reactor = await Reactor.findUnique({
            where: {
                reactorId: parseInt(id),
            },
        });
        if (!reactor) {
            return res.status(404).json({
                msg: `No existe corte con el id ${id}`
            });
        }
        await Reactor.update({
            where: {
                reactorId: parseInt(id),
            },
            data: {
                closed: false,
            },
        });
        res.json(reactor);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al desactivar el corte'
        });
    }
}
