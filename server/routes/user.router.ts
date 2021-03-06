import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import userStrategy from '../strategies/user.strategy';
import { encryptPassword } from '../modules/encryption';
import { PersonDB } from '../models/documents/Person';

const router: express.Router = express.Router();

router.get('/', rejectUnauthenticated, (req: Request, res: Response): void => {
  res.send(req.user);
});

router.post(
  '/register',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const username: string | null = <string>req.body.username;
    const password: string | null = encryptPassword(req.body.password);
    const newUser = new PersonDB({
      username,
      password,
    });
    newUser
      .save()
      .then(() => {
        res.sendStatus(201);
      })
      .catch((err) => {
        next(err);
      });
  }
);

router.post(
  '/login',
  userStrategy.authenticate('local'),
  (req: Request, res: Response): void => {
    res.sendStatus(200);
  }
);

router.post('/logout', (req: Request, res: Response): void => {
  req.logout();
  res.sendStatus(200);
});

export default router;
