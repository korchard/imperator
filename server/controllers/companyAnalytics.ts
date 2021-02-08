import { Request, Response } from 'express';
import { UserDB } from '../models/documents/User';

// comment
export const singleCompany = async (
  req: Request,
  res: Response
): Promise<void> => {
  try { 
    res.sendStatus(200);
  } catch (error) {
    console.error('Error getting total actions: ', error);
  }
};