import { Router } from "express";
import validateToken from "./validateToken";
import { deleteCompany, getCompanies, getCompany, postCompany, putCompany } from "../controllers/companies";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";

const router = Router();

router.get('/', validateToken, getCompanies);

router.get('/:id', validateToken, getCompany);

router.post('/', [
    check('name', 'El nombre es un campo obligatorio').not().isEmpty(),
    check('rut', 'El rut es un campo obligatorio').not().isEmpty(),
    check('adress', 'La dirección es un campo obligatorio').not().isEmpty(),
    validateFields
], validateToken, postCompany);

router.put('/:id', validateToken, putCompany);

router.delete('/:id', validateToken, deleteCompany);

export default router;