import { Router } from "express";
import validateToken from "./validateToken";
import { validateFields } from "../middlewares/validate-fields";
import { check } from "express-validator";
import { deleteState, getState, getStates, postState, putState } from "../controllers/documentStates";

const router = Router();

router.get('/', validateToken, getStates);

router.get('/:id', validateToken, getState);

router.post('/', [
    check('name', 'El nombre es un campo obligatorio').not().isEmpty(),
    validateFields
], validateToken, postState);

router.put('/:id', validateToken, putState);

router.delete('/:id', validateToken, deleteState);

export default router;