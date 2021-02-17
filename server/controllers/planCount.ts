import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';

// Aggregation for donut chart for plan count on operational dashboard 
const planCount = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await CompanyDB.aggregate([
      { $unwind: '$billing.plan' },
      { $sortByCount: '$billing.plan' },
    ]);
    res.send(data);
  } catch (error) {
    console.error('Error getting billing plans: ', error);
  }
};

export default planCount;
