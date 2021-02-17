import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import { getUsersOverTime } from '../controllers/userOverTime';

const router: express.Router = express.Router();

router.get('/:year', rejectUnauthenticated, getUsersOverTime);

export default router;
