import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';

// controllers
import { getUsersOverTime } from '../controllers/user-over-time';

const router: express.Router = express.Router();

router.get('/', rejectUnauthenticated, getUsersOverTime);

export default router;