import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';

export const singleCompany = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const companyId = req.params.id;
    const data = await CompanyDB.aggregate([
      {
        $match: {
          _id: `${companyId}`,
        },
      },
      {
        $project: {
          _id: 1,
          email: { $toUpper: '$email' },
          company: { $toUpper: '$company' },
          'billing.status': { $toUpper: '$billing.status' },
          'billing.customerId': { $toUpper: '$billing.customerId' },
          'billing.plan': { $toUpper: '$billing.plan' },
          'billing.trialStart': 1,
          'billing.trialEnd': 1,
          activeUntil: 1,
          jira: 1,
          zapier: 1,
          hashtagsTotal: { $size: '$hashtags' },
          documentsTotal: { $size: '$documents' },
          projectsTotal: { $size: '$projects' },
          notesTotal: { $size: '$notes' },
          insightsTotal: { $size: '$insights' },
          collectionsTotal: { $size: '$collections' },
          recommendationsTotal: { $size: '$recommendations' },
        },
      },
    ]);
    res.send(data[0]);
  } catch (error) {
    console.error('Error getting total actions: ', error);
  }
};
