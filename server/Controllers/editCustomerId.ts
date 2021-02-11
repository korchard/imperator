import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';
import mongoose from 'mongoose'


export const editCustomerId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try { 
      console.log('req body edit', req.body)
      const {customerId, initCustomerId} = req.body
    //   const filter = {_id: "6018596184af92843a7bb1c0"};
    //   const updatedDocument = {
    //       $set: {
    //           "billing.customerId": `test`
    //       }
    //   }
    await CompanyDB.findOneAndUpdate(
        {"billing.customerId": `${initCustomerId}`},
        {"billing.customerId": `${customerId}`},
        {new: true}
      )
    res.sendStatus(201);

  } catch (error) {
    console.error('Error getting total actions: ', error);
  }
};