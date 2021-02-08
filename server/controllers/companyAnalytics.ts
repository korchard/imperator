import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';

// comment
export const singleCompany = async (
  req: Request,
  res: Response
): Promise<void> => {
  try { 
   const data = await CompanyDB.aggregate([
      {
        $search: {
          "text": {
            "query": "6018596184af92843a7bb1c0",
            "path": "_id" //local field to look for the query input
          }
        }
      },{
            $lookup: { //join table users
            from: 'users',
            localField: 'company', //is the field from companies
            foreignField: 'company', //field from users
            as: 'users_data' //name that hold results 
            }
        },
        {
        $project: {
          "_id": 0, 
          "email": 1, 
          "company": 1, 
          "billing.status": 1,
          "billing.customerId": 1,
          "billing.plan": 1,
          "billing.trialStart": 1,
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
    res.send(data[0]);
  } catch (error) {
    console.error('Error getting total actions: ', error);
  }
};