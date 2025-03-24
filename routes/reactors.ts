import { Router } from "express";
import validateToken from "./validateToken";
import { deleteReactor, getReactor, getAllReactors, getReactors, postReactor, putReactor, chargeReactor, finishReactor } from "../controllers/reactors";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";
import { get } from "http";

const router = Router();

router.get('/', validateToken, getReactors);

router.get('/getAll/', validateToken, getAllReactors);

router.get('/:id', validateToken, getReactor);

router.post('/', [
    check('name', 'El nombre es un campo obligatorio').not().isEmpty(),
    validateFields
], validateToken, postReactor);

router.put('/:id', validateToken, putReactor);

router.put('/charge/:id', validateToken, chargeReactor);

router.put('/finish/:id', validateToken, finishReactor);

router.delete('/:id', validateToken, deleteReactor);

export default router;