import Company from "../models/company";
import { Request, Response } from "express";

export const getCompanies = async (req: Request, res: Response) => {
    const companies = await Company.findMany({
        where: {
            deletedAt: null,
        },
    });
    res.json(companies);
}

export const getCompany = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const company = await Company.findUnique({
            where: {
                companyId: parseInt(id),
            },
        });
        if (company) {
            res.json(company);
        } else {
            res.status(404).json({
                msg: `No existe compañia con el id ${id}`
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al obtener la compañia'
        });
    }
}

export const postCompany = async (req: Request, res: Response) => {

    const { body } = req;
    try {
        const company = await Company.create({
            data: {
                name: body.name,
                rut: body.rut,
                address: body.address,
            },
        });
        res.json(company)
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al registrar la compañia'
        },
        );
    }
}

export const putCompany = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;
    try {
        const company = await Company.findUnique({
            where: {
                companyId: parseInt(id),
            },
        });
        if (!company) {
            return res.status(404).json({
                msg: `No existe compañia con el id ${id}`
            });
        }

        const updatedCompany = await Company.update({
            where: {
                companyId: parseInt(id),
            },
            data: body,
        });
        res.json(updatedCompany);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al actualizar la compañia'
        });
    }
}

export const deleteCompany = async (req: Request, res: Response) => {

    const { id } = req.params;
    try {
        const company = await Company.findUnique({
            where: {
                companyId: parseInt(id),
            },
        });
        if (!company) {
            return res.status(404).json({
                msg: `No existe compañia con el id ${id}`
            });
        }
        await Company.update({
            where: {
                companyId: parseInt(id),
            },
            data: {
                deletedAt: new Date(),
            },
        });
        res.json(company);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: 'Error al desactivar la compañia'
        });
    }
}



