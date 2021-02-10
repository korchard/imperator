import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';

// comment
export const singleCompanyUsers = async (
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
            $lookup: { //join table users
                from: 'users',
                localField: 'company', //is the field from companies
                foreignField: 'company', //field from users
                as: 'users_data' //name that hold results 
            }
        },
        {$unwind: {path: "$users_data"}},
        {$unwind: {path: "$company"}},
        {
        $project: {
          "_id": 0, 
          "email": 1, 
          "company": 1, 
          "users_data.firstname": 1, 
          "users_data.lastname": 1, 
          "users_data.email": 1, 
        }},
    ]);
    res.send(data);
    console.log(companyId)
  } catch (error) {
    console.error('Error getting company users: ', error);
  }
};
