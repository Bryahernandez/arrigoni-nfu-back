import { Router } from "express";
import validateToken from "./validateToken";
import { deleteItemType, getItemType, getItemTypes, postItemType, putItemType } from "../controllers/documentItemsTypes";
import { get } from "http";
import { validateFields } from "../middlewares/validate-fields";
import { check } from "express-validator";

const router = Router();

router.get('/', validateToken, getItemTypes);

router.get('/:id', validateToken, getItemType);

router.post('/', [
    check('name', 'El nombre es un campo obligatorio').not().isEmpty(),
    validateFields
], validateToken, postItemType);

router.put('/:id', validateToken, putItemType);

router.delete('/:id', validateToken, deleteItemType);

export default router;