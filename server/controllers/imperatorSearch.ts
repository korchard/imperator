import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';

const imperatorSearch = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await CompanyDB.aggregate([
      // AQUOAVO _id: 6018596184af92843a7bb1c0
      {
        $search: {
          autocomplete: {
            query: `${req.params.query}`,
            path: 'company', //local field to look for the query input
            fuzzy: {
              maxEdits: 2,
              prefixLength: 2,
            },
          },
        },
      },
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
          'total users': { $size: '$teamMembers' }
        },
      },
    ]);
    res.send(data);
  } catch (error) {
    console.error('Error getting imperator data:', error);
  }
};

export default imperatorSearch;
