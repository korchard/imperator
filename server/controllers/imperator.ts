import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';

const imperator = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try { // this needs to be an AGGREGATION, not a FIND
        const data = await CompanyDB.aggregate([
            {
                $project: {
                    company: {$toUpper: "$company"},
                    plan: "$billing.plan",
                    status: "$billing.status",
                    customerId: "$billing.customerId",
                    activeUntil: "$activeUntil",
                    jira: "$jira",
                    zapier: "$zapier",
                    _id: 0
                },
            },
               {
                    $sort: { company: 1 }
               }
        ]);
        res.send(data)
    } catch (error) {
      console.error('Error getting imperator data:', error);
    }
  };

export default imperator;