import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';
import mongoose from 'mongoose'

mongoose.set('useFindAndModify', false);

export const editCustomerId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try { 
      console.log('req body edit', req.body)
      const {customerId, initCustomerId} = req.body
    await CompanyDB.findOneAndUpdate(
        {"billing.customerId": `${initCustomerId}`},
        {"billing.customerId": `${customerId}`},
        {new: true}
      )
    res.sendStatus(201);

  } catch (error) {
    console.error('Error editing customer id controller: ', error);
  }
};