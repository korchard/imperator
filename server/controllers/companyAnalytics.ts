import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';

// comment
export const singleCompany = async (
  req: Request,
  res: Response
): Promise<void> => {
  try { 
    const companyId = req.params.id;
    const data = await CompanyDB.aggregate([
      {
        $match: {
          "_id": `${companyId}`
        }
      },
        {
        $project: {
          "_id": 1, 
          "email": 1, 
          "company": 1, 
          "billing.status": 1,
          "billing.customerId": 1,
          "billing.plan": 1,
          "billing.trialStart": 1,
          "billing.trialEnd": 1,
          "activeUntil": 1,
          "jira": 1,
          "zapier": 1,
          hashtagsTotal: {$size: "$hashtags"},
          documentsTotal: {$size: "$documents"},
          projectsTotal: {$size: "$projects"},
          notesTotal: {$size: "$notes"},
          insightsTotal: {$size: "$insights"},
          collectionsTotal: {$size: "$collections"},
          recommendationsTotal: {$size: "$recommendations"}
        }},
    ]);
    res.send(data[0]);
    console.log(companyId)
  } catch (error) {
    console.error('Error getting total actions: ', error);
  }
};
