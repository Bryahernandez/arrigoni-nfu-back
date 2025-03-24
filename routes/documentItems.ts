import { Router } from "express";
import validateToken from "./validateToken";
import { deleteItem, getItem, getItems, getItemsByDocument, getItemsByFuego, getItemsByMatricula, getItemsByMatriculaWithCuts, getItemsCutsByFuego, getItemsCutsByMatricula, postItem, putItem } from "../controllers/documentItems";
import { validateFields } from "../middlewares/validate-fields";
import { check } from "express-validator";
import { get } from "http";

const router = Router();

router.get('/', validateToken, getItems);

router.get('/:id', validateToken, getItem);

router.get('/byDocument/:id', validateToken, getItemsByDocument);

router.get('/byFuego/:fuego', validateToken, getItemsByFuego);

router.get('/byMatricula/:matricula', validateToken, getItemsByMatricula);

router.get('/byMatriculaWithCuts/:matricula', validateToken, getItemsByMatriculaWithCuts);

router.get('/cutsByFuego/:fuego', validateToken, getItemsCutsByFuego);

router.get('/cutsByMatricula/:matricula', validateToken, getItemsCutsByMatricula);

router.post('/', [
    check('documentId', 'El documentId es un campo obligatorio').not().isEmpty(),
    check('stateId', 'El stateId es un campo obligatorio').not().isEmpty(),
    check('typeId', 'El typeId es un campo obligatorio').not().isEmpty(),
    validateFields
], validateToken, postItem);

router.put('/:id', validateToken, putItem);

router.delete('/:id', validateToken, deleteItem);

export default router;