## Classes

<dl>
<dt><a href="#DateFormatter">DateFormatter</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#getOption">getOption(options, property, defaultValue)</a> ⇒ <code>string</code></dt>
<dd><p>Get options or default values depending on config</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#FormatterOptions">FormatterOptions</a></dt>
<dd></dd>
</dl>

<a name="DateFormatter"></a>

## DateFormatter

**Kind**: global class

- [DateFormatter](#DateFormatter)
  - [new DateFormatter()](#new_DateFormatter_new)
  - _instance_
    - [.format(date)](#DateFormatter+format) ⇒ <code>string</code>
    - [.formatRange(dateRange)](#DateFormatter+formatRange) ⇒ <code>Array.&lt;string&gt;</code>
    - [.parse(dateString, [asDate])](#DateFormatter+parse) ⇒ <code>Date</code> \| <code>object</code>
    - [.parseRange(dateStringRange, [asDate])](#DateFormatter+parseRange) ⇒ <code>Array.&lt;Date&gt;</code> \| <code>Array.&lt;object&gt;</code>
  - _static_
    - [.DateFormatter](#DateFormatter.DateFormatter)
      - [new DateFormatter(mode, [options])](#new_DateFormatter.DateFormatter_new)

<a name="new_DateFormatter_new"></a>

### new DateFormatter()

DateFormatter Class

<a name="DateFormatter+format"></a>

### dateFormatter.format(date) ⇒ <code>string</code>

Formats Date object as string

**Kind**: instance method of [<code>DateFormatter</code>](#DateFormatter)  
**Returns**: <code>string</code> - String representation of Date

| Param | Type                                     | Description            |
| ----- | ---------------------------------------- | ---------------------- |
| date  | <code>Date</code> \| <code>object</code> | Date object to convert |

<a name="DateFormatter+formatRange"></a>

### dateFormatter.formatRange(dateRange) ⇒ <code>Array.&lt;string&gt;</code>

Formats date range as strings

**Kind**: instance method of [<code>DateFormatter</code>](#DateFormatter)  
**Returns**: <code>Array.&lt;string&gt;</code> - String representation of Dates

| Param     | Type                                                                 | Description           |
| --------- | -------------------------------------------------------------------- | --------------------- |
| dateRange | <code>Array.&lt;Date&gt;</code> \| <code>Array.&lt;object&gt;</code> | Date range to convert |

<a name="DateFormatter+parse"></a>

### dateFormatter.parse(dateString, [asDate]) ⇒ <code>Date</code> \| <code>object</code>

Parses date string to Date or Moment object

**Kind**: instance method of [<code>DateFormatter</code>](#DateFormatter)  
**Returns**: <code>Date</code> \| <code>object</code> - The parsed date

| Param      | Type                 | Default           | Description                                                     |
| ---------- | -------------------- | ----------------- | --------------------------------------------------------------- |
| dateString | <code>string</code>  |                   | Date string to parse                                            |
| [asDate]   | <code>boolean</code> | <code>true</code> | Whether to output a Date object (true) or Moment object (false) |

<a name="DateFormatter+parseRange"></a>

### dateFormatter.parseRange(dateStringRange, [asDate]) ⇒ <code>Array.&lt;Date&gt;</code> \| <code>Array.&lt;object&gt;</code>

Parses date string arrays to Date or Moment objects

**Kind**: instance method of [<code>DateFormatter</code>](#DateFormatter)  
**Returns**: <code>Array.&lt;Date&gt;</code> \| <code>Array.&lt;object&gt;</code> - The parsed dates

| Param           | Type                              | Default           | Description                                                     |
| --------------- | --------------------------------- | ----------------- | --------------------------------------------------------------- |
| dateStringRange | <code>Array.&lt;string&gt;</code> |                   | Date strings array to parse                                     |
| [asDate]        | <code>boolean</code>              | <code>true</code> | Whether to output a Date object (true) or Moment object (false) |

<a name="DateFormatter.DateFormatter"></a>

### DateFormatter.DateFormatter

**Kind**: static class of [<code>DateFormatter</code>](#DateFormatter)  
<a name="new_DateFormatter.DateFormatter_new"></a>

#### new DateFormatter(mode, [options])

Creates an instance of DateFormatter.

| Param     | Type                                                                                                                              | Default         | Description                                  |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------- |
| mode      | <code>&#x27;year&#x27;</code> \| <code>&#x27;month&#x27;</code> \| <code>&#x27;week&#x27;</code> \| <code>&#x27;date&#x27;</code> |                 | Mode to use for formatting                   |
| [options] | [<code>FormatterOptions</code>](#FormatterOptions)                                                                                | <code>{}</code> | Config to override default formatter strings |

<a name="modes"></a>

## modes

**Kind**: global enum  
**Properties**

| Name  | Default            |
| ----- | ------------------ |
| YEAR  | <code>year</code>  |
| MONTH | <code>month</code> |
| WEEK  | <code>week</code>  |
| DATE  | <code>date</code>  |

<a name="getOption"></a>

## getOption(options, property, defaultValue) ⇒ <code>string</code>

Get options or default values depending on config

**Kind**: global function  
**Returns**: <code>string</code> - The value to use for the option

| Param        | Type                                               | Description                            |
| ------------ | -------------------------------------------------- | -------------------------------------- |
| options      | [<code>FormatterOptions</code>](#FormatterOptions) | The config object                      |
| property     | <code>string</code>                                | Property to look for                   |
| defaultValue | <code>string</code>                                | Default value if option is not present |

<a name="FormatterOptions"></a>

## FormatterOptions

**Kind**: global typedef  
**Properties**

| Name          | Type                |
| ------------- | ------------------- |
| [dateFormat]  | <code>string</code> |
| [weekFormat]  | <code>string</code> |
| [monthFormat] | <code>string</code> |
| [yearFormat]  | <code>string</code> |
