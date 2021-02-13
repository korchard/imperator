import { Request, Response } from 'express';
import { UserDB } from '../models/documents/User';

export const analyticsAllUserSearch = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
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
          email: 1,
          company: 1,
          name: 1,
        },
      }, { $limit: 10 }
    ]);
    res.send(data);
  } catch (error) {
    console.error('Error getting imperator data:', error);
  }
};
