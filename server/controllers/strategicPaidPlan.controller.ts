import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';

const strategicPaidPlan = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await CompanyDB.aggregate(
        [
            {$project: {
                _id: 0,
                company: 1,
                month: {$month: "$activeUntil"},
                year: {$year: "$activeUntil"}
              }},
              {$match: {
              "month":new Date().getMonth() +1,
              "year": new Date().getFullYear()
              }
            }
        ]
     )
     res.send(data)
    } catch (error) {
      console.error('Error in strategicPaidPlan controller getting plan average: ', error);
    }
};

  
export default strategicPaidPlan;