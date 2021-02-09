import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';

const strategic = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await CompanyDB.aggregate([
      {
        $group: {
          _id: '$billing.plan',
          avgLength: {
            $avg: { $subtract: ['$billing.trialStart', '$billing.trialEnd'] },
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
