import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import planCount from '../controllers/planCount';

const router: express.Router = express.Router();

router.get('/', rejectUnauthenticated, planCount);

router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {}
);

export default router;
