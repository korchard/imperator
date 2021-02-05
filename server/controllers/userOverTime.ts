import { Request, Response } from 'express';
import { UserDB } from '../models/documents/User';
// comment
export const getUsersOverTime = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const jan = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date('2021, 01'),
        $lt: new Date('2021, 02'),
      },
    });
    const feb = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date('2021, 02'),
        $lt: new Date('2021, 03'),
      },
    });
    const mar = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date('2021, 03'),
        $lt: new Date('2021, 04'),
      },
    });
    const apr = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date('2021, 04'),
        $lt: new Date('2021, 05'),
      },
    });
    const may = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date('2021, 05'),
        $lt: new Date('2021, 06'),
      },
    });
    const jun = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date('2021, 06'),
        $lt: new Date('2021, 07'),
      },
    });
    const jul = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date('2021, 07'),
        $lt: new Date('2021, 08'),
      },
    });
    const aug = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date('2021, 08'),
        $lt: new Date('2021, 09'),
      },
    });
    const sep = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date('2021, 09'),
        $lt: new Date('2021, 10'),
      },
    });
    const oct = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date('2021, 10'),
        $lt: new Date('2021, 11'),
      },
    });
    const nov = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date('2021, 11'),
        $lt: new Date('2021, 12'),
      },
    });
    const dec = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date('2021, 12'),
      },
    });
    res.send([jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]);
  } catch (error) {
    console.error('Error getting users over time: ', error);
  }
};
