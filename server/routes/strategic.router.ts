import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import strategic from '../controllers/strategic.controller';
import strategicPaidPlan from '../controllers/strategicPaidPlan.controller';
import strategicTrialPlan from '../controllers/strategicTrialPlan.controller';

const router: express.Router = express.Router();

router.get('/', rejectUnauthenticated, strategic);

router.get('/paid', rejectUnauthenticated, strategicPaidPlan);

router.get('/trial', rejectUnauthenticated, strategicTrialPlan);

// router.post(
//   '/',
//   (req: Request, res: Response, next: express.NextFunction): void => {}
// );

export default router;
