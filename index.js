const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

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
    this.weekFormat = this._getOption(options, 'weekFormat', 'YYYYMM');
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
   * Checks if value is a Date object
   *
   * @private
   * @param {*} value Any element
   * @returns {boolean} Whether the value is a Date object
   * @memberof DatesFormatter
   */
  _isDate(value) {
    return (
      value instanceof Date ||
      (typeof value === 'object' &&
        Reflect.apply(Object.prototype, 'toString', value) === '[object Date]')
    );
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
    if (!this._isDate(date)) {
      throw new Error('Date should be Date object');
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
    if (!this._isDate(start) || !this._isDate(end)) {
      throw new Error('Dates should be Date object');
    }
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
   * @param {boolean} [asUTC=true] Whether to use date input as UTC
   * @returns {string} String representation of Date
   * @memberof DatesFormatter
   */
  format(date, asUTC = true) {
    this._checkDate(date);
    const formatterString = this._getFormatterString();
    const parsed = asUTC ? dayjs.utc(date) : date;
    return dayjs(parsed).format(formatterString);
  }

  /**
   * Formats date range as strings
   *
   * @param {(Date[]|object[])} dateRange Date range to convert
   * @param {boolean} [asUTC=true] Whether to use date input as UTC
   * @returns {string[]} String representation of Dates
   * @memberof DatesFormatter
   */
  formatRange(dateRange, asUTC = true) {
    this._checkDateRange(dateRange);
    return dateRange.map((date) => this.format(date, asUTC));
  }

  /**
   * Parses date string to Date
   *
   * @param {string} dateString Date string to parse
   * @param {boolean} [asUTC=true] Whether to use date input as UTC
   * @returns {(Date|object)} The parsed date
   * @memberof DatesFormatter
   */
  parse(dateString, asUTC = true) {
    const formatterString = this._getFormatterString();
    const args = [dateString, formatterString];
    const parsed = asUTC ? dayjs.utc(...args) : dayjs(...args);
    return dayjs(parsed).toDate();
  }

  /**
   * Parses date string arrays to Date
   *
   * @param {string[]} dateStringRange Date strings array to parse
   * @param {boolean} [asUTC=true] Whether to use date input as UTC
   * @returns {(Date[]|object[])} The parsed dates
   * @memberof DatesFormatter
   */
  parseRange(dateStringRange, asUTC = true) {
    const formatterString = this._getFormatterString();
    return dateStringRange.map((dateString) =>
      this.parse(dateString, formatterString, asUTC));
  }
}

module.exports.DatesFormatter = DatesFormatter;
module.exports.modes = modes;
