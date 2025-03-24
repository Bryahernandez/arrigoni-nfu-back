
import { Router } from "express";
import validateToken from "./validateToken";
import { deleteGranelTag, getGranelTag, getGranelTags, getTagByCoincidence, getTagsByReactor, postGranelTag, putGranelTag } from "../controllers/granelTags";
import { validateFields } from "../middlewares/validate-fields";

const router = Router();

router.get('/', validateToken, getGranelTags);

router.get('/:id', validateToken, getGranelTag);

router.get('/coincidence/:tagId', validateToken, getTagByCoincidence)

router.get('/reactor/:reactorId', validateToken, getTagsByReactor);

router.post('/', [
], validateToken, postGranelTag);

router.put('/:id', validateToken, putGranelTag);

router.delete('/:id', validateToken, deleteGranelTag);

export default router;