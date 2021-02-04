import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import imperator from '../controllers/imperator';
import imperatorSearch from '../controllers/imperatorSearch';

const router: express.Router = express.Router();

router.get('/', rejectUnauthenticated, imperator);

router.get('/search/:param', rejectUnauthenticated, imperatorSearch);

router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {}
);

export default router;