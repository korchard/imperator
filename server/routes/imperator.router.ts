import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import imperator from '../controllers/imperator';

const router: express.Router = express.Router();

router.get('/', rejectUnauthenticated, imperator);

router.get('/', rejectUnauthenticated, imperator);

router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {}
);

export default router;