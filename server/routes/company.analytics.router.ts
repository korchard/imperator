
import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import { getTotalActions } from '../controllers/totalactions.controller'
import { singleCompany } from '../controllers/companyAnalytics'; 

const router: express.Router = express.Router();

router.get('/single-company', singleCompany);
router.get('/all-companies', getTotalActions);

export default router;
