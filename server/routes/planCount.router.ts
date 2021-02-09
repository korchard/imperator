import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import planCount from '../controllers/planCount';

const router: express.Router = express.Router();

router.get('/', rejectUnauthenticated, planCount);

export default router;
