import { Request, Response } from 'express';
import express from 'express';
// import passwordReset from '../controllers/passwordReset';

const router: express.Router = express.Router();

// router.get('/', passwordReset);

router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    console.log('email', req.body);

  }
);

// https://api.qa.aureliuslab.com/v1/resetpassword with a json object containing email and confirm

export default router;