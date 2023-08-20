/**
 * Date separator characters
 */
type DateSeparator = '-' | '/' | ' ' | '. '

/**
 * Date formats supported by the parser and formatter
 */
export type DateFormat =
  | 'YYYY'
  | `${'YYYY'}${DateSeparator}${'MM'}`
  | `${'YYYY' | 'YYY' | 'YY'}${DateSeparator}${'MM'}${DateSeparator}${'DD'}`
  | `${'DD'}${DateSeparator}${'MMMM' | 'MM'}${DateSeparator}${'YYYY'}`
  | `${'MMMM'}${DateSeparator}${'DD'}${DateSeparator}${'YYYY'}`
  | `${'MMMM'}${DateSeparator}${'DD'},${DateSeparator}${'YYYY'}`

interface DateFormatDetail {
  regex: RegExp
  format: DateFormat // General format of the date
}

/**
 * Date formats supported by the parser and formatter
 * @internal Used by the parser and formatter
 * @ignore Exclude from docs
 */
export const DateFormats: DateFormatDetail[] = [
  { regex: /^(\d{4})$/, format: 'YYYY' },
  {
    regex: /^(\d{4})(?:[-/ ](\d{1,2}))$/,
    format: 'YYYY-MM'
  },
  {
    regex: /^(\d{2,4})(?:[-/ ](\d{1,2}))(?:[-/ ](\d{1,2}))$/,
    format: 'YYYY-MM-DD'
  },
  {
    regex: /^(\d{1,2})(?:[-/ ]([A-Za-z]+))(?:[-/ ](\d{4}))$/,
    format: 'DD-MMMM-YYYY'
  },
  {
    regex:
      /^(Baisakh|Jestha|Ashad|Shrawan|Bhadra|Ashoj|Kartik|Mangsir|Poush|Magh|Falgun|Chaitra)?(?:[-/ ,](\d{1,2}))(?:,)?(?:[-/ ,](\d{4}))?$/,
    format: 'MMMM-DD-YYYY'
  },
  {
    regex: /^(\d{1,2})(?:[-/ ](\d{1,2}))(?:[-/ ](\d{4}))$/,
    format: 'DD-MM-YYYY'
  }
]
