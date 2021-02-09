
import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import { singleCompany } from '../controllers/companyAnalytics'; 

const router: express.Router = express.Router();

router.get('/:id', singleCompany);

export default router;
