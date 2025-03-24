import { Router } from "express";
import validateToken from "./validateToken";
import { check } from "express-validator";
import { getUsers, getUser, getUserByEmail, postUser, putUser, deleteUser, getProducers } from "../controllers/user";
import { validateFields } from "../middlewares/validate-fields";
import { emailExists } from "../helpers/db-validator";


const router = Router();

router.get('/', validateToken, getUsers);

router.get('/byId/:id', validateToken, getUser);

router.get('/byEmail/:email', validateToken, getUserByEmail);

router.get('/producers/', validateToken, getProducers);

router.post('/', [
    check('firstName', 'El primer nombre es un campo obligatorio').not().isEmpty(),
    check('lastName', 'El apellido es un campo obligatorio').not().isEmpty(),
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom(emailExists),
    validateFields
], postUser);

router.put('/:id', validateToken, putUser);

router.delete('/:id', validateToken, deleteUser);

export default router;