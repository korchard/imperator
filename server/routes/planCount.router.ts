import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';

const router: express.Router = express.Router();

router.get(
  '/',
  rejectUnauthenticated,
  (req: Request, res: Response): void => {}
);

router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {}
);

export default router;
