import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';

const imperator = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    console.log('getting data for the table');
    try {
        const data = await CompanyDB.find({}, 
                {
                    "company": 1, 
                    "billing.plan": 1,
                    "activeUntil": 1,
                    "jira": { $or: true },
                    "zapier": { $or: true },
                }
             )
             res.send(data)
             console.log('imperator controller', data)
    } catch (error) {
      console.error('Error getting imperator data:', error);
    }
  };

export default imperator;