import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';

const imperatorSearch = async (req: Request, res: Response): Promise<void> => {
  console.log('getting data for the table', req.params);
  try {
    // this needs to be an AGGREGATION, not a FIND
    const data = await CompanyDB.find({
      company: /m/,
    });
    res.send(data);
    console.log('imperator controller', data);
  } catch (error) {
    console.error('Error getting imperator data:', error);
  }
};

export default imperatorSearch;
