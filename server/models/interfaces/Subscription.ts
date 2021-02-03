import { Company } from './Company'
import { Base } from './Base'

export interface Subscription extends Base {
  target: string
  type: string
  company: Company
}
