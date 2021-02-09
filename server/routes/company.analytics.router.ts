
import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import { singleCompany } from '../controllers/companyAnalytics'; 
import { singleCompanyUsers } from '../controllers/companyAnalyticsUsers'; 

const router: express.Router = express.Router();

router.get('/:id', rejectUnauthenticated, singleCompany);

router.get('/users/:id', rejectUnauthenticated, singleCompanyUsers);

export default router;
