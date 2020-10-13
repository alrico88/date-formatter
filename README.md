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
    - [.format(date, [asUTC])](#DatesFormatter+format) ⇒ <code>string</code>
    - [.formatRange(dateRange, [asUTC])](#DatesFormatter+formatRange) ⇒ <code>Array.&lt;string&gt;</code>
    - [.parse(dateString, [asUTC])](#DatesFormatter+parse) ⇒ <code>Date</code> \| <code>object</code>
    - [.parseRange(dateStringRange, [asUTC])](#DatesFormatter+parseRange) ⇒ <code>Array.&lt;Date&gt;</code> \| <code>Array.&lt;object&gt;</code>
  - _static_
    - [.DatesFormatter](#DatesFormatter.DatesFormatter)
      - [new DatesFormatter(mode, [options])](#new_DatesFormatter.DatesFormatter_new)

<a name="new_DatesFormatter_new"></a>

### new DatesFormatter()

DatesFormatter Class

<a name="DatesFormatter+format"></a>

### datesFormatter.format(date, [asUTC]) ⇒ <code>string</code>

Formats Date object as string

**Kind**: instance method of [<code>DatesFormatter</code>](#DatesFormatter)  
**Returns**: <code>string</code> - String representation of Date

| Param   | Type                                     | Default           | Description                      |
| ------- | ---------------------------------------- | ----------------- | -------------------------------- |
| date    | <code>Date</code> \| <code>object</code> |                   | Date object to convert           |
| [asUTC] | <code>boolean</code>                     | <code>true</code> | Whether to use date input as UTC |

<a name="DatesFormatter+formatRange"></a>

### datesFormatter.formatRange(dateRange, [asUTC]) ⇒ <code>Array.&lt;string&gt;</code>

Formats date range as strings

**Kind**: instance method of [<code>DatesFormatter</code>](#DatesFormatter)  
**Returns**: <code>Array.&lt;string&gt;</code> - String representation of Dates

| Param     | Type                                                                 | Default           | Description                      |
| --------- | -------------------------------------------------------------------- | ----------------- | -------------------------------- |
| dateRange | <code>Array.&lt;Date&gt;</code> \| <code>Array.&lt;object&gt;</code> |                   | Date range to convert            |
| [asUTC]   | <code>boolean</code>                                                 | <code>true</code> | Whether to use date input as UTC |

<a name="DatesFormatter+parse"></a>

### datesFormatter.parse(dateString, [asUTC]) ⇒ <code>Date</code> \| <code>object</code>

Parses date string to Date

**Kind**: instance method of [<code>DatesFormatter</code>](#DatesFormatter)  
**Returns**: <code>Date</code> \| <code>object</code> - The parsed date

| Param      | Type                 | Default           | Description                      |
| ---------- | -------------------- | ----------------- | -------------------------------- |
| dateString | <code>string</code>  |                   | Date string to parse             |
| [asUTC]    | <code>boolean</code> | <code>true</code> | Whether to use date input as UTC |

<a name="DatesFormatter+parseRange"></a>

### datesFormatter.parseRange(dateStringRange, [asUTC]) ⇒ <code>Array.&lt;Date&gt;</code> \| <code>Array.&lt;object&gt;</code>

Parses date string arrays to Date

**Kind**: instance method of [<code>DatesFormatter</code>](#DatesFormatter)  
**Returns**: <code>Array.&lt;Date&gt;</code> \| <code>Array.&lt;object&gt;</code> - The parsed dates

| Param           | Type                              | Default           | Description                      |
| --------------- | --------------------------------- | ----------------- | -------------------------------- |
| dateStringRange | <code>Array.&lt;string&gt;</code> |                   | Date strings array to parse      |
| [asUTC]         | <code>boolean</code>              | <code>true</code> | Whether to use date input as UTC |

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
