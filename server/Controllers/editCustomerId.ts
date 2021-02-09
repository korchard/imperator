import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';


export const editCustomerId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try { 
      console.log('req body edit', req.body)
    await CompanyDB.findByIdAndUpdate(
        {"_id": "6018596184af92843a7bb1c0"},
        {
          $set: {
            "billing.customerId": `testtest`  
            }
        },
        {
          new: true
        }
        )
    res.sendStatus(201);

  } catch (error) {
    console.error('Error getting total actions: ', error);
  }
};