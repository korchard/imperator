import { CompanyDB } from '../models/documents/Company';
import { Request, Response } from 'express';

export const getTotalActions = async (req: Request, res: Response) => {
  try {
    const data = await CompanyDB.aggregate([
      {
        $lookup: {
          from: 'hashtags',
          pipeline: [
            {
              $group: {
                _id: 0,
                count: { $sum: 1 },
              },
            },
          ],
          as: 'hashtags',
        },
      },
      {
        $lookup: {
          from: 'insights',
          pipeline: [
            {
              $group: {
                _id: 0,
                count: { $sum: 1 },
              },
            },
          ],
          as: 'insights',
        },
      },
      {
        $lookup: {
          from: 'notes',
          pipeline: [
            {
              $group: {
                _id: 0,
                count: { $sum: 1 },
              },
            },
          ],
          as: 'notes',
        },
      },
      {
        $lookup: {
          from: 'projects',
          pipeline: [
            {
              $group: {
                _id: 0,
                count: { $sum: 1 },
              },
            },
          ],
          as: 'projects',
        },
      },
      { $unwind: { path: '$hashtags' } },
      { $unwind: { path: '$insights' } },
      { $unwind: { path: '$notes' } },
      { $unwind: { path: '$projects' } },
      {
        $project: {
          _id: 0,
          hashtags: 1,
          insights: 1,
          notes: 1,
          projects: 1,
        },
      },
    ]);
    res.send(data[0]);
  } catch (error) {
    console.error('Error getting total actions: ', error);
  }
};
