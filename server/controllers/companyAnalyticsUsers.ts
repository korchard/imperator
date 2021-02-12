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
          _id: `${companyId}`,
        },
      },
      {
        $lookup: {
          //join table users
          from: 'users',
          localField: 'company', //is the field from companies
          foreignField: 'company', //field from users
          as: 'users_data', //name that hold results
        },
      },
      { $unwind: { path: '$users_data' } },
      { $unwind: { path: '$company' } },
      {
        $project: {
          _id: 1,
          email: { $toUpper: '$email' },
          company: { $toUpper: '$company' },
          'users_data._id': 1,
          'users_data.name': { $toUpper: '$users_data.name' },
          'users_data.email': { $toUpper: '$users_data.email' },
        },
      },
    ]);
    res.send(data);
  } catch (error) {
    console.error('Error getting company users: ', error);
  }
};
