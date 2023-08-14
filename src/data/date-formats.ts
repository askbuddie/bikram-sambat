type Order = 'year' | 'month' | 'day'

/**
 * Date formats supported by the parser and formatter
 */
export type Format =
  | 'YYYY'
  | 'YYYY-MM'
  | 'YYYY/MM'
  | 'YYYY MM'
  | 'YYYY-MM-DD'
  | 'YYYY/MM/DD'
  | 'YYYY MM DD'
  | 'DD MMMM YYYY'
  | 'DD-MMMM-YYYY'
  | 'DD/MMMM/YYYY'
  | 'DD-MM-YYYY'
  | 'DD/MM/YYYY'
  | 'DD MM YYYY'
  | 'MM-DD'
  | 'MM/DD'
  | 'MM DD'
  | 'YY-MM-DD'
  | 'YY/MM/DD'
  | 'YY MM DD'
  | 'YYY-MM-DD'
  | 'YYY/MM/DD'
  | 'YYY MM DD'

interface DateFormat {
  regex: RegExp
  format: Format[]
  order: Order[]
}

export const DateFormats: DateFormat[] = [
  { regex: /^(\d{4})$/, format: ['YYYY'], order: ['year'] },
  {
    regex: /^(\d{4})(?:[-/ ](\d{1,2}))$/,
    format: ['YYYY-MM', 'YYYY/MM', 'YYYY MM'],
    order: ['year', 'month']
  },
  {
    regex: /^(\d{4})(?:[-/ ](\d{1,2}))(?:[-/ ](\d{1,2}))$/,
    format: ['YYYY-MM-DD', 'YYYY/MM/DD', 'YYYY MM DD'],
    order: ['year', 'month', 'day']
  },
  {
    regex: /^(\d{1,2})(?:[-/ ]([A-Za-z]+))(?:[-/ ](\d{4}))$/,
    format: ['DD MMMM YYYY', 'DD-MMMM-YYYY', 'DD/MMMM/YYYY'],
    order: ['day', 'month', 'year']
  },
  {
    regex: /^(\d{1,2})(?:[-/ ](\d{1,2}))(?:[-/ ](\d{4}))$/,
    format: ['DD-MM-YYYY', 'DD/MM/YYYY', 'DD MM YYYY'],
    order: ['day', 'month', 'year']
  },
  {
    regex: /^(\d{1,2})(?:[-/ ](\d{1,2}))$/,
    format: ['MM-DD', 'MM/DD', 'MM DD'],
    order: ['month', 'day']
  },
  {
    regex: /^(\d{2,4})(?:[-/ ](\d{1,2}))(?:[-/ ](\d{1,2}))$/,
    format: ['YY-MM-DD', 'YY/MM/DD', 'YY MM DD'],
    order: ['year', 'month', 'day']
  },
  {
    regex: /^(\d{3,4})(?:[-/ ](\d{1,2}))(?:[-/ ](\d{1,2}))$/,
    format: ['YYY-MM-DD', 'YYY/MM/DD', 'YYY MM DD'],
    order: ['year', 'month', 'day']
  }
]
