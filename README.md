## Classes

<dl>
<dt><a href="#DatesFormatter">DatesFormatter</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#FormatterOptions">FormatterOptions</a></dt>
<dd></dd>
</dl>

<a name="DatesFormatter"></a>

## DatesFormatter

**Kind**: global class

- [DatesFormatter](#DatesFormatter)
  - [new DatesFormatter()](#new_DatesFormatter_new)
  - _instance_
    - [.format(date)](#DatesFormatter+format) ⇒ <code>string</code>
    - [.formatRange(dateRange)](#DatesFormatter+formatRange) ⇒ <code>Array.&lt;string&gt;</code>
    - [.parse(dateString, [asDate])](#DatesFormatter+parse) ⇒ <code>Date</code> \| <code>object</code>
    - [.parseRange(dateStringRange, [asDate])](#DatesFormatter+parseRange) ⇒ <code>Array.&lt;Date&gt;</code> \| <code>Array.&lt;object&gt;</code>
  - _static_
    - [.DatesFormatter](#DatesFormatter.DatesFormatter)
      - [new DatesFormatter(mode, [options])](#new_DatesFormatter.DatesFormatter_new)

<a name="new_DatesFormatter_new"></a>

### new DatesFormatter()

DatesFormatter Class

<a name="DatesFormatter+format"></a>

### datesFormatter.format(date) ⇒ <code>string</code>

Formats Date object as string

**Kind**: instance method of [<code>DatesFormatter</code>](#DatesFormatter)  
**Returns**: <code>string</code> - String representation of Date

| Param | Type                                     | Description            |
| ----- | ---------------------------------------- | ---------------------- |
| date  | <code>Date</code> \| <code>object</code> | Date object to convert |

<a name="DatesFormatter+formatRange"></a>

### datesFormatter.formatRange(dateRange) ⇒ <code>Array.&lt;string&gt;</code>

Formats date range as strings

**Kind**: instance method of [<code>DatesFormatter</code>](#DatesFormatter)  
**Returns**: <code>Array.&lt;string&gt;</code> - String representation of Dates

| Param     | Type                                                                 | Description           |
| --------- | -------------------------------------------------------------------- | --------------------- |
| dateRange | <code>Array.&lt;Date&gt;</code> \| <code>Array.&lt;object&gt;</code> | Date range to convert |

<a name="DatesFormatter+parse"></a>

### datesFormatter.parse(dateString, [asDate]) ⇒ <code>Date</code> \| <code>object</code>

Parses date string to Date or Moment object

**Kind**: instance method of [<code>DatesFormatter</code>](#DatesFormatter)  
**Returns**: <code>Date</code> \| <code>object</code> - The parsed date

| Param      | Type                 | Default           | Description                                                     |
| ---------- | -------------------- | ----------------- | --------------------------------------------------------------- |
| dateString | <code>string</code>  |                   | Date string to parse                                            |
| [asDate]   | <code>boolean</code> | <code>true</code> | Whether to output a Date object (true) or Moment object (false) |

<a name="DatesFormatter+parseRange"></a>

### datesFormatter.parseRange(dateStringRange, [asDate]) ⇒ <code>Array.&lt;Date&gt;</code> \| <code>Array.&lt;object&gt;</code>

Parses date string arrays to Date or Moment objects

**Kind**: instance method of [<code>DatesFormatter</code>](#DatesFormatter)  
**Returns**: <code>Array.&lt;Date&gt;</code> \| <code>Array.&lt;object&gt;</code> - The parsed dates

| Param           | Type                              | Default           | Description                                                     |
| --------------- | --------------------------------- | ----------------- | --------------------------------------------------------------- |
| dateStringRange | <code>Array.&lt;string&gt;</code> |                   | Date strings array to parse                                     |
| [asDate]        | <code>boolean</code>              | <code>true</code> | Whether to output a Date object (true) or Moment object (false) |

<a name="DatesFormatter.DatesFormatter"></a>

### DatesFormatter.DatesFormatter

**Kind**: static class of [<code>DatesFormatter</code>](#DatesFormatter)  
<a name="new_DatesFormatter.DatesFormatter_new"></a>

#### new DatesFormatter(mode, [options])

Creates an instance of DatesFormatter.

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
