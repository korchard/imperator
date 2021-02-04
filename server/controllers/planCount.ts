import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';

const planCount = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    console.log('this is working planCount');
    try {
        const data = await CompanyDB.aggregate([
               {$unwind: "$billing.plan"}, {$sortByCount: "$billing.plan"}
             ])
             res.send(data)
             console.log('This is the plan count controller', data)
    } catch (error) {
      console.error('Error getting total actions: ', error);
    }
  };

export default planCount;