import { Request, Response } from 'express';
import express from 'express';
const router: express.Router = express.Router();

router.post('/', (req: Request, res: Response): void => {
  res.json('email successfully');
});

export default router;
