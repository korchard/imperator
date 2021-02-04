import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import { getTotalActions } from '../controllers/totalactions.controller';
// controllers
import { getUsersOverTime } from '../controllers/user-over-time';

const router: express.Router = express.Router();

router.get('/totalactions', rejectUnauthenticated, getTotalActions);

router.get('/user-over-time', getUsersOverTime);

export default router;
