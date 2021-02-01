import request from 'request'
import { SubscriptionDB } from './Subscription'
import { UserDB } from './User'

export const SubscriptionNotifier = {
  notify: async function(
    eventType,
    company,
    item,
  ) {
    const subscriptions = await SubscriptionDB.find({
      type: eventType,
      company: company,
    }).exec()
    subscriptions.forEach(function(s) {
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

  decorate: function(schema) {
    schema.post('save', async function(doc) {
      const user = await UserDB.findById(doc.project.owner).exec()

      if (user != null) {
        /*** Notify Subscriptions */
        SubscriptionNotifier.notify('insight', user.company, doc)
      }
    })
  },
}
