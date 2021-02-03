export type LanguageModel = 'default' | 'video' | 'phone_call'

export interface Language {
  name: string
  BCP47: string
  models: LanguageModel[]
  enhanced?: LanguageModel[]
  automaticPunctuation: boolean
  diarization: boolean
  boost: boolean
  wordConfidenceLevel: boolean
  profanityFilter: boolean
}
