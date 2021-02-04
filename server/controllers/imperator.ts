import { Request, Response } from 'express';
import { CompanyDB } from '../models/documents/Company';

const imperator = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    console.log('getting data for the table');
    try { // this needs to be an AGGREGATION, not a FIND
        const data = await CompanyDB.find({}, 
                {
                    "company": 1, 
                    "billing.plan": 1,
                    "activeUntil": 1,
                    "jira": { $or: true },
                    "zapier": { $or: true },
                }
             );

             // currently not functioning  
             await CompanyDB.aggregate([
             {$count: 'Total_Companies'}, 
                 {
                     $lookup: {
                         from: "hashtags",
                         pipeline: [{
                             $group: {
                                 '_id': 0,
                             'count': {$sum: 1}
                             }
                             }],
                         as: "hashtags"
                     },
                 }, {
                     $lookup: {
                         from: "insights",
                         pipeline: [{
                             $group: {
                                 '_id': 0,
                             'count': {$sum: 1}
                             }
                             }],
                         as: "insights"
                     },
                 }, {
                     $lookup: {
                         from: "notes",
                         pipeline: [{
                             $group: {
                                 '_id': 0,
                             'count': {$sum: 1}
                             }
                             }],
                         as: "notes"
                     },
                 }, {
                     $lookup: {
                         from: "projects",
                         pipeline: [{
                             $group: {
                                 '_id': 0,
                             'count': {$sum: 1}
                             }
                             }],
                         as: "projects"
                     }
                 },
                 {$unwind: {path: "$hashtags"}},
                 {$unwind: {path: "$insights"}},
                 {$unwind: {path: "$notes"}},
                 {$unwind: {path: "$projects"}},
                 {$project: {
                     'totalNotes': {$sum: ["$notes.count"]},
                     'totalHashtags': {$sum: ["$hashtags.count"]},
                     'totalInsights': {$sum: ["$insights.count"]},
                     'totalProjects': {$sum: ["$projects.count"]},
                     }
                 }
             ]);
             res.send(data)
             console.log('imperator controller', data)
    } catch (error) {
      console.error('Error getting imperator data:', error);
    }
  };

export default imperator;