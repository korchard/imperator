import { Request, Response } from 'express';
import { UserDB } from '../models/documents/User';
import mongoose from 'mongoose'


export const editUserEmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try { 
      console.log('req body edit', req.body)
      const {initEmail, newEmail} = req.body
    //   const filter = {_id: "6018596184af92843a7bb1c0"};
    //   const updatedDocument = {
    //       $set: {
    //           "billing.customerId": `test`
    //       }
    //   }
    await UserDB.findOneAndUpdate(
        {"email": `${initEmail}`},
        {"email": `${newEmail}`},
        {new: true}
      )
    res.sendStatus(201);

  } catch (error) {
    console.error('Error edit email controller: ', error);
  }
};