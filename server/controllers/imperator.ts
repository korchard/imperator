import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';


// This is the aggregation for the imperator table
const imperator = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await CompanyDB.aggregate([
      {
        $project: {
          _id: 1,
          company: { $toUpper: '$company' },
          'billing.status': { $toUpper: '$billing.status' },
          'billing.customerId': { $toUpper: '$billing.customerId' },
          'billing.plan': { $toUpper: '$billing.plan' },
          'billing.trialStart': 1,
          activeUntil: 1,
          jira: 1,
          zapier: 1,
          'hashtags total': { $size: '$hashtags' },
          'documents total': { $size: '$documents' },
          'projects total': { $size: '$projects' },
          'notes total': { $size: '$notes' },
          'insights total': { $size: '$insights' },
          'collections total': { $size: '$collections' },
          'recommendations total': { $size: '$recommendations' },
          'total users': { $size: '$teamMembers' },
        },
      },
    ]);
    res.send(data);
  } catch (error) {
    console.error('Error getting imperator data:', error);
  }
};

export default imperator;
