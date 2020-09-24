const {DatesFormatter, modes} = require('./index');
const moment = require('moment');

describe('Test formatting methods with default options', () => {
  test('Formatting default date values should return expected strings', () => {
    const formatter = new DatesFormatter(modes.DATE);
    expect(formatter.format(new Date('2020-01-01'))).toBe('20200101');
  });

  test('Formatting default month values should return expected strings', () => {
    const formatter = new DatesFormatter(modes.MONTH);
    expect(formatter.format(new Date('2020-01-01'))).toBe('202001');
  });

  test('Formatting default year values should return expected strings', () => {
    const formatter = new DatesFormatter(modes.YEAR);
    expect(formatter.format(new Date('2020-01-01'))).toBe('2020');
  });
});

describe('Test formatting methods with overridden options', () => {
  const opts = {
    dateFormat: 'DD-MM-YY',
    monthFormat: 'MM-YYYY',
    yearFormat: 'YY',
  };
  test('Formatting custom date values should return expected strings', () => {
    const formatter = new DatesFormatter(modes.DATE, opts);
    expect(formatter.format(new Date('2020-01-01'))).toBe('01-01-20');
  });

  test('Formatting custom month values should return expected strings', () => {
    const formatter = new DatesFormatter(modes.MONTH, opts);
    expect(formatter.format(new Date('2020-01-01'))).toBe('01-2020');
  });

  test('Formatting custom year values should return expected strings', () => {
    const formatter = new DatesFormatter(modes.YEAR, opts);
    expect(formatter.format(new Date('2020-01-01'))).toBe('20');
  });
});

describe('Test range formatting methods with overridden options', () => {
  const opts = {
    dateFormat: 'DD-MM-YY',
    monthFormat: 'MM-YYYY',
    yearFormat: 'YY',
  };
  test('Formatting custom date range values should return expected strings', () => {
    const formatter = new DatesFormatter(modes.DATE, opts);
    expect(formatter.formatRange([new Date('2020-01-01'), new Date('2021-02-01')])).toStrictEqual(['01-01-20', '01-02-21']);
  });

  test('Formatting custom month range values should return expected strings', () => {
    const formatter = new DatesFormatter(modes.MONTH, opts);
    expect(formatter.formatRange([new Date('2020-01-01'), new Date('2021-02-01')])).toStrictEqual(['01-2020', '02-2021']);
  });

  test('Formatting custom year range values should return expected strings', () => {
    const formatter = new DatesFormatter(modes.YEAR, opts);
    expect(formatter.formatRange([new Date('2020-01-01'), new Date('2021-02-01')])).toStrictEqual(['20', '21']);
  });
});

describe('Test parsing methods with default options', () => {
  test('Parsing custom date values should return expected strings', () => {
    const formatter = new DatesFormatter(modes.DATE);
    expect(formatter.parse('20200101')).toMatchObject(new Date('2020-01-01'));
  });

  test('Parsing custom month values should return expected strings', () => {
    const formatter = new DatesFormatter(modes.MONTH);
    expect(formatter.parse('202001')).toMatchObject(new Date('2020-01-01'));
  });

  test('Parsing custom year values should return expected strings', () => {
    const formatter = new DatesFormatter(modes.YEAR);
    expect(formatter.parse('2020')).toMatchObject(new Date('2020-01-01'));
  });
});

describe('Check internal methods', () => {
  test('Invalid dates should throw error', () => {
    const formatter = new DatesFormatter(modes.DATE);
    expect(() => {
      formatter.format('Alberto');
    }).toThrow();
  });

  test('Moment objects should not throw error', () => {
    const formatter = new DatesFormatter(modes.DATE);
    expect(() => {
      formatter.format(moment());
    }).not.toThrow();
  });

  test('Valid Date objects should not throw error', () => {
    const formatter = new DatesFormatter(modes.DATE);
    expect(() => {
      formatter.format(new Date());
    }).not.toThrow();
  });

  test('Invalid values in date range should throw error', () => {
    const formatter = new DatesFormatter(modes.DATE);
    expect(() => {
      formatter.formatRange(['Alberto', new Date()]);
    }).toThrow();
  });

  test('Mixing types in Date ranges made of Moment objects and Dates should not throw error', () => {
    const formatter = new DatesFormatter(modes.DATE);
    expect(() => {
      formatter.formatRange([moment('20200101', 'YYYYMMDD'), new Date()]);
    }).not.toThrow();
  });

  test('_getInstance method should return a moment instance', () => {
    const formatter = new DatesFormatter(modes.DATE);
    const instance = formatter._getInstance(new Date());
    expect(moment.isMoment(instance)).toBe(true);
  });

  test('_getFormatterString method should always return a string, no matter the mode', () => {
    const formatter = new DatesFormatter('unknown mode');
    expect(typeof formatter._getFormatterString()).toBe('string');
  });
});
