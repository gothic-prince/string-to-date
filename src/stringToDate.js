import moment from 'moment'

/**
 * @param date {string}
 * @param format {string}
 * @return {Date}
 */
const stringToDate = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
  const momentDate = moment(date, format)
  if (moment(momentDate).isValid() === false) {
    return null
  }
  return new Date(momentDate)
}
export default stringToDate
