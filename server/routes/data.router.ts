import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import mongoose from 'mongoose';

const router: express.Router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  mongoose.createConnection(`${process.env.MONGO_URI}`);

  const db = mongoose.connection;

  db.companies.aggregate([
    { $count: 'Total_Companies' },
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
        total: {
          $sum: [
            '$notes.count',
            '$hashtags.count',
            '$insights.count',
            '$projects.count',
          ],
        },
      },
    },
  ]);
});

export default router;
