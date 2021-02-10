import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';

// month: {$month: {$toDate: {$multiply: ["$billing.trialEnd", 1000]}}},
//     year: {$year: {$toDate: {$multiply: ["$billing.trialEnd", 1000]}}}

const strategic = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await CompanyDB.aggregate([
      {
        $group: {
          _id: '$billing.plan',
          avgLength: {
            $avg: {
              $subtract: [
                { $toDate: { $multiply: ['$billing.trialStart', 1000] } },
                { $toDate: { $multiply: ['$billing.trialEnd', 1000] } },
              ],
            },
          },
        },
      },
      { $sort: { _id: 1 } },
    ]);
    console.log(data);
    res.send(data);
  } catch (error) {
    console.error(
      'Error in strategic controller getting plan average: ',
      error
    );
  }
};

export default strategic;
