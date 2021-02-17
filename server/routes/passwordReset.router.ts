import { Request, Response } from 'express';
import express from 'express';
import axios from 'axios';

const router: express.Router = express.Router();

router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    axios
      .post(`https://api.qa.aureliuslab.com/v1/resetpassword`, req.body)
      .then((response) => {
        res.status(202).json(response.data);
      })
      .catch((error) => {
        console.log('Error requesting password reset server-side', error);
        res.sendStatus(500);
      });
  }
);

export default router;
