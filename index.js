const moment = require('moment');

/**
 * @typedef FormatterOptions
 * @property {string} [dateFormat]
 * @property {string} [weekFormat]
 * @property {string} [monthFormat]
 * @property {string} [yearFormat]
 */

/**
 * @enum
 */
const modes = {
  YEAR: 'year',
  MONTH: 'month',
  WEEK: 'week',
  DATE: 'date',
};

/**
 * DatesFormatter Class
 *
 * @class DatesFormatter
 */
class DatesFormatter {

  /**
   * Creates an instance of DatesFormatter.
   * @param {('year'|'month'|'week'|'date')} mode Mode to use for formatting
   * @param {FormatterOptions} [options={}] Config to override default formatter strings
   * @memberof DatesFormatter
   */
  constructor(mode, options = {}) {
    this.dateFormat = this._getOption(options, 'dateFormat', 'YYYYMMDD');
    this.weekFormat = this._getOption(options, 'weekFormat', 'YYYYWW');
    this.monthFormat = this._getOption(options, 'monthFormat', 'YYYYMM');
    this.yearFormat = this._getOption(options, 'yearFormat', 'YYYY');
    this.mode = mode;
  }

  /**
   * Get options or default values depending on config
   *
   * @private
   * @param {FormatterOptions} options The config object
   * @param {string} property Property to look for
   * @param {string} defaultValue Default value if option is not present
   * @returns {string} The value to use for the option
   * @memberof DatesFormatter
   */
  _getOption(options, property, defaultValue) {
    return options[property] ? options[property] : defaultValue;
  }

  /**
   * Checks if date is of valid type
   *
   * @private
   * @param {(Date|object)} date Date to check
   * @returns {void}
   * @memberof DatesFormatter
   */
  _checkDate(date) {
    if (!moment.isDate(date) && !moment.isMoment(date)) {
      throw new Error('Date should be Date or MomentJS object');
    }
  }

  /**
   * Checks if date range is of valid type
   *
   * @private
   * @param {(Date[]|object[])} dateRange Date to check
   * @returns {void}
   * @memberof DatesFormatter
   */
  _checkDateRange(dateRange) {
    const [start, end] = dateRange;
    if (
      (!moment.isDate(start) && !moment.isMoment(start)) ||
      (!moment.isDate(end) && !moment.isMoment(end))
    ) {
      throw new Error('Dates should be Date or MomentJS object');
    }
  }

  /**
   * Gets instance depending on if it's already a moment object
   *
   * @private
   * @param {(Date|object)} date Date to check
   * @returns {object} moment instance
   * @memberof DatesFormatter
   */
  _getInstance(date) {
    return moment.isMoment(date) === true ? date : moment(date);
  }

  /**
   * Gets formatter string according to mode
   *
   * @private
   * @returns {string} The formatter string
   * @memberof DatesFormatter
   */
  _getFormatterString() {
    let formatterString;
    switch (this.mode) {
      case modes.YEAR:
        formatterString = this.yearFormat;
        break;
      case modes.MONTH:
        formatterString = this.monthFormat;
        break;
      case modes.WEEK:
        formatterString = this.weekFormat;
        break;
      case modes.DATE:
      default:
        formatterString = this.dateFormat;
    }
    return formatterString;
  }

  /**
   * Formats Date object as string
   *
   * @param {(Date|object)} date Date object to convert
   * @returns {string} String representation of Date
   * @memberof DatesFormatter
   */
  format(date) {
    this._checkDate(date);
    const formatterString = this._getFormatterString();
    const instance = this._getInstance(date);
    return instance.format(formatterString);
  }

  /**
   * Formats date range as strings
   *
   * @param {(Date[]|object[])} dateRange Date range to convert
   * @returns {string[]} String representation of Dates
   * @memberof DatesFormatter
   */
  formatRange(dateRange) {
    this._checkDateRange(dateRange);
    const formatterString = this._getFormatterString();
    return dateRange.map((date) =>
      this._getInstance(date).format(formatterString));
  }

  /**
   * Parses date string to Date or Moment object
   *
   * @param {string} dateString Date string to parse
   * @param {boolean} [asDate=true] Whether to output a Date object (true) or Moment object (false)
   * @returns {(Date|object)} The parsed date
   * @memberof DatesFormatter
   */
  parse(dateString, asDate = true) {
    const formatterString = this._getFormatterString();
    const parsed = moment.utc(dateString, formatterString);
    return asDate ? parsed.toDate() : parsed;
  }

  /**
   * Parses date string arrays to Date or Moment objects
   *
   * @param {string[]} dateStringRange Date strings array to parse
   * @param {boolean} [asDate=true] Whether to output a Date object (true) or Moment object (false)
   * @returns {(Date[]|object[])} The parsed dates
   * @memberof DatesFormatter
   */
  parseRange(dateStringRange, asDate = true) {
    const formatterString = this._getFormatterString();
    return dateStringRange.map((dateString) => {
      const parsed = moment.utc(dateString, formatterString);
      return asDate ? parsed.toDate() : parsed;
    });
  }
}

module.exports.DatesFormatter = DatesFormatter;
module.exports.modes = modes;
