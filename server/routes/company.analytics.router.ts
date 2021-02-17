import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import { singleCompany } from '../controllers/companyAnalytics';
import { singleCompanyUsers } from '../controllers/companyAnalyticsUsers';
import { editCustomerId } from '../controllers/editCustomerId';
import { analyticsAllUserSearch } from '../controllers/analyticsAllUserSearch';
import { editUserEmail } from '../controllers/editUserEmail';

const router: express.Router = express.Router();

router.get('/:id', rejectUnauthenticated, singleCompany);
router.get('/all/:search', rejectUnauthenticated, analyticsAllUserSearch);
router.put('/all', rejectUnauthenticated, editUserEmail);
router.get('/users/:id', rejectUnauthenticated, singleCompanyUsers);
router.put('/:id', editCustomerId);

export default router;
