import * as ptData from './pt'
import * as enData from './en'

export const portfolioData = {
  pt: ptData,
  en: enData
}

export type LanguageData = typeof ptData
