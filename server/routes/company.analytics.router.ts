
import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import { singleCompany } from '../controllers/companyAnalytics'; 
import { editCustomerId } from '../controllers/editCustomerId';

const router: express.Router = express.Router();

router.get('/:id', rejectUnauthenticated, singleCompany);

router.put('/:id', editCustomerId);    

export default router;
