import { Router } from "express";
import validateToken from "./validateToken";
import { deleteCut, deleteFromReactor, finishFromReactor, getCut, getCutByCoincidence, getCuts, getCutsByReactor, postCut, putCut, startInReactor } from "../controllers/cuts";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";

const router = Router();

router.get('/', validateToken, getCuts);

router.get('/:id', validateToken, getCut);

router.get('/coincidence/:cutId', validateToken, getCutByCoincidence)

router.get('/reactor/:reactorId', validateToken, getCutsByReactor);

router.post('/', [
    validateFields
], validateToken, postCut);

router.put('/:id', validateToken, putCut);

router.put('/delFromReactor/:id', validateToken, finishFromReactor);

router.put('/startInReactor/:id', validateToken, startInReactor);

router.delete('/:id', validateToken, deleteCut);

router.delete('/fromReactor/:id', validateToken, deleteFromReactor);

export default router;