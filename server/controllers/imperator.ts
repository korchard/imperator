import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';

const imperator = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try { // this needs to be an AGGREGATION, not a FIND
        const data = await CompanyDB.aggregate([
          {
            $search: {
              "text": {
                "query": "AQUOAVO",
                "path": "company" //local field to look for the query input
              }
            }
          },
            {
            $project: {
              "_id": 0, 
              "email": 1, 
              "company": 1, 
              "billing.status": 1,
              "billing.plan": 1,
              "activeUntil": 1,
              "jira": 1,
              "zapier": 1,
              "hashtags total": {$size: "$hashtags"},
              "documents total": {$size: "$documents"},
              "projects total": {$size: "$projects"},
              "notes total": {$size: "$notes"},
              "insights total": {$size: "$insights"},
              "collections total": {$size: "$collections"},
              "recommandations total": {$size: "$recommendations"}
            }},
        ]);
        res.send(data)
    } catch (error) {
      console.error('Error getting imperator data:', error);
    }
  };

export default imperator;