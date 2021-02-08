import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import imperator from '../controllers/imperator';
import imperatorSearch from '../controllers/imperatorSearch';

const router: express.Router = express.Router();

router.get('/', rejectUnauthenticated, imperator);

router.get('/search/:query', imperatorSearch, (req: Request, res: Response): void => {
  res.sendStatus(201);
});

export default router;
