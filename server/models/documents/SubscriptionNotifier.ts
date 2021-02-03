import request from 'request'
import { SubscriptionDB } from './Subscription'
import { UserDB } from './User'
import { Schema } from 'mongoose'
import { Insight, Company } from '../interfaces'

export const SubscriptionNotifier = {
  notify: async function(
    eventType: string,
    company: Company,
    item: {},
  ): Promise<void> {
    const subscriptions = await SubscriptionDB.find({
      type: eventType,
      company: company,
    }).exec()
    subscriptions.forEach(function(s: any) {
      request.post(
        {
          url: s.target,
          json: item,
        },
        function() {
          console.info(s.target + ' notified for new ' + eventType)
        },
      )
    })
  },

  decorate: function(schema: Schema<Insight>): void {
    schema.post('save', async function(doc: Insight) {
      const user = await UserDB.findById(doc.project.owner).exec()

      if (user != null) {
        /*** Notify Subscriptions */
        SubscriptionNotifier.notify('insight', user.company, doc)
      }
    })
  },
}
