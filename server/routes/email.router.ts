import { Request, Response } from 'express';
import express from 'express';
const router: express.Router = express.Router();
import rejectUnauthenticated from '../modules/authentication-middleware';

router.post('/', rejectUnauthenticated,(req: Request, res: Response): void => {
  res.json('email successfully');
});

export default router;
