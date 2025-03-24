import { Router } from "express";
import { loginUser } from "../controllers/login";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";


const router = Router();

router.post('/', [
    check('email', 'El correo no es válido').isEmail(),
    check('password', 'El password está vacío').notEmpty(),
    validateFields
], loginUser);

export default router;