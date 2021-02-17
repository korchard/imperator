import { Request, Response } from 'express';
import { UserDB } from '../models/documents/User';

export const getUsersOverTime = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const jan = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date(`${req.params.year}, 00`),
        $lt: new Date(`${req.params.year}, 01`),
      },
    });
    const feb = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date(`${req.params.year}, 01`),
        $lt: new Date(`${req.params.year}, 02`),
      },
    });
    const mar = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date(`${req.params.year}, 02`),
        $lt: new Date(`${req.params.year}, 03`),
      },
    });
    const apr = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date(`${req.params.year}, 03`),
        $lt: new Date(`${req.params.year}, 04`),
      },
    });
    const may = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date(`${req.params.year}, 04`),
        $lt: new Date(`${req.params.year}, 05`),
      },
    });
    const jun = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date(`${req.params.year}, 05`),
        $lt: new Date(`${req.params.year}, 06`),
      },
    });
    const jul = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date(`${req.params.year}, 06`),
        $lt: new Date(`${req.params.year}, 07`),
      },
    });
    const aug = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date(`${req.params.year}, 07`),
        $lt: new Date(`${req.params.year}, 08`),
      },
    });
    const sep = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date(`${req.params.year}, 08`),
        $lt: new Date(`${req.params.year}, 09`),
      },
    });
    const oct = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date(`${req.params.year}, 09`),
        $lt: new Date(`${req.params.year}, 10`),
      },
    });
    const nov = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date(`${req.params.year}, 10`),
        $lt: new Date(`${req.params.year}, 11`),
      },
    });
    const dec = await UserDB.countDocuments({
      timestamp: {
        $gte: new Date(`${req.params.year}, 11`),
        $lt: new Date(`${req.params.year}, 12`),
      },
    });
    res.send([jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]);
  } catch (error) {
    console.error('Error getting users over time: ', error);
  }
};
