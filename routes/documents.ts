import { Router } from "express";
import validateToken from "./validateToken";
import { deleteDocument, getDocument, getDocuments, getDocumentsByCompany, getDocumentsClientSummary, getDocumentsProducerSummary, postDocument, putDocument } from "../controllers/documents";
import { get } from "http";
import { validateFields } from "../middlewares/validate-fields";
import { check } from "express-validator";

const router = Router();

router.get('/', validateToken, getDocuments);

router.get('/byId/:id', validateToken, getDocument);

router.get('/clientSummary/', validateToken, getDocumentsClientSummary);

router.get('/producerSummary/:id', validateToken, getDocumentsProducerSummary);

router.get('/byCompany/:id', validateToken, getDocumentsByCompany);

router.post('/', [
    check('guia', 'Guia es un campo obligatorio').not().isEmpty(),
    check('companyId', 'Empresa es un campo obligatorio').not().isEmpty(),
    check('userId', 'Usuario es un campo obligatorio').not().isEmpty(),
    validateFields
], postDocument);

router.put('/:id', validateToken, putDocument);

router.delete('/:id', validateToken, deleteDocument);

export default router;