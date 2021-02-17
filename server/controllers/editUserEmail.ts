import { Request, Response } from 'express';
import { UserDB } from '../models/documents/User';
import mongoose from 'mongoose'

mongoose.set('useFindAndModify', false);

export const editUserEmail = async (
  req: Request,
  res: Response
): Promise<void> => {
  try { 
      console.log('req body edit', req.body)
      const {initEmail, newEmail} = req.body
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