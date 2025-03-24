import { Router } from "express";
import validateToken from "./validateToken";
import { deleteItemState, getItemState, getItemStates, postItemState, putItemState } from "../controllers/documentItemsStates";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";

const router = Router();

router.get('/', validateToken, getItemStates);

router.get('/:id', validateToken, getItemState);

router.post('/', [
    check('name', 'El nombre es un campo obligatorio').not().isEmpty(),
    validateFields
], validateToken, postItemState);

router.put('/:id', validateToken, putItemState);

router.delete('/:id', validateToken, deleteItemState);

export default router;