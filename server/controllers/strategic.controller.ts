import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';


// Aggregation for average plan length by type graph on strategic dashboard
const strategic = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await CompanyDB.aggregate([
      {
        $group: {
          _id: '$billing.plan',
          avgLength: {
            $avg: {
              $trunc: {
                $divide: [
                  {
                    $subtract: [
                      { $toDate: { $multiply: ['$billing.trialEnd', 1000] } },
                      { $toDate: { $multiply: ['$billing.trialStart', 1000] } },
                    ],
                  },
                  //converting it to a date we can use
                  1000 * 60 * 60 * 24,
                ],
              },
            },
          },
        },
      },
      { $sort: { _id: 1 } },
    ]);
    res.send(data);
  } catch (error) {
    console.error(
      'Error in strategic controller getting plan average: ',
      error
    );
  }
};

export default strategic;
