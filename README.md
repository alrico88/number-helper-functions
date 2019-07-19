<a name="NumberHelper"></a>

## NumberHelper

**Kind**: global class

- [NumberHelper](#NumberHelper)
  - [new NumberHelper()](#new_NumberHelper_new)
  - _instance_
    - [.convertToNumber(toCheck, [decimals])](#NumberHelper+convertToNumber) ⇒ <code>number</code>
    - [.processNumber(value, [decimals])](#NumberHelper+processNumber) ⇒ <code>number</code>
  - _static_
    - [.NumberHelper](#NumberHelper.NumberHelper)
      - [new NumberHelper()](#new_NumberHelper.NumberHelper_new)

<a name="new_NumberHelper_new"></a>

### new NumberHelper()

NumberHelper Class

<a name="NumberHelper+convertToNumber"></a>

### numberHelper.convertToNumber(toCheck, [decimals]) ⇒ <code>number</code>

Converts string to number

**Kind**: instance method of [<code>NumberHelper</code>](#NumberHelper)

| Param      | Type                                       | Default        | Description                    |
| ---------- | ------------------------------------------ | -------------- | ------------------------------ |
| toCheck    | <code>string</code> \| <code>number</code> |                | Number-like to convert         |
| [decimals] | <code>number</code>                        | <code>2</code> | Number of decimals to truncate |

<a name="NumberHelper+processNumber"></a>

### numberHelper.processNumber(value, [decimals]) ⇒ <code>number</code>

Processes number to get clean value

**Kind**: instance method of [<code>NumberHelper</code>](#NumberHelper)
**Returns**: <code>number</code> - Parsed and processed number

| Param      | Type                                       | Default        | Description                    |
| ---------- | ------------------------------------------ | -------------- | ------------------------------ |
| value      | <code>string</code> \| <code>number</code> |                | String or number to process    |
| [decimals] | <code>number</code>                        | <code>2</code> | No. of decimals to truncate to |

<a name="NumberHelper.NumberHelper"></a>

### NumberHelper.NumberHelper

**Kind**: static class of [<code>NumberHelper</code>](#NumberHelper)
<a name="new_NumberHelper.NumberHelper_new"></a>

#### new NumberHelper()

Creates an instance of NumberHelper.
