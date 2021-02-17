import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import { getTotalActions } from '../controllers/totalactions.controller';

const router: express.Router = express.Router();

router.get('/totalactions', rejectUnauthenticated, getTotalActions);

export default router;
