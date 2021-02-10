import { Request, Response } from 'express';
import { UserDB } from '../models/documents/User';

export const analyticsAllUserSearch = async (req: Request, res: Response): Promise<void> => {
  try {
      console.log('Req param for search', req.params)
    const data = await UserDB.aggregate([
      {
        $search: {
          autocomplete: {
            query: `${req.params.search}`,
            path: 'email', //local field to look for the query input
            fuzzy: {
              maxEdits: 2,
              prefixLength: 2,
            },
          },
        },
      },
    {
      $project: {
        'email': 1, 
        'company': 1, 
        'firstname': 1, 
        'lastname': 1
      }
    }
    ]);
    console.log('This is data', data)
    res.send(data);
  } catch (error) {
    console.error('Error getting imperator data:', error);
  }
};

