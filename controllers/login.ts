import { Request, Response } from "express";
import User from "../models/user";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const loginUser = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    const existeEmail = await User.findUnique({
        where: {
            email: (email),
        },
        include: {
            company: true,
        }
    });


    if (existeEmail) {
        if (bcryptjs.compareSync(password, existeEmail.password)) {
            const id = existeEmail.userId
            const type = existeEmail.type
            const name = existeEmail.firstName
            const lastName = existeEmail.lastName
            const role = existeEmail.role
            const token = jwt.sign({ email: email }, process.env.SECRET_KEY!)
            const companyId = existeEmail.companyId
            res.json({ id, type, token, status: 'ok', name, lastName, role, companyId })
        }
        else {
            res.json({ msg: 'Contraseña incorrecta', status: 'error' })
        }
    } else {
        res.json({ msg: 'No existe el usuario', status: 'error' });
    }

}

