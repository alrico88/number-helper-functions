<a name="NumberHelper"></a>

## NumberHelper

**Kind**: global class

- [NumberHelper](#NumberHelper)
  - [new NumberHelper()](#new_NumberHelper_new)
  - [.isNumber(n)](#NumberHelper.isNumber) ⇒ <code>boolean</code>
  - [.isInt(n)](#NumberHelper.isInt) ⇒ <code>boolean</code>
  - [.isFloat(n)](#NumberHelper.isFloat) ⇒ <code>boolean</code>
  - [.isEven(n)](#NumberHelper.isEven) ⇒ <code>boolean</code>
  - [.isOdd(n)](#NumberHelper.isOdd) ⇒ <code>boolean</code>
  - [.isFinite(n)](#NumberHelper.isFinite) ⇒ <code>boolean</code>
  - [.isPrime(num)](#NumberHelper.isPrime) ⇒ <code>boolean</code>
  - [.getRandom(min, max)](#NumberHelper.getRandom) ⇒ <code>number</code>
  - [.prefixWithZeros(number, length)](#NumberHelper.prefixWithZeros) ⇒ <code>string</code>
  - [.convertToNumber(toCheck, [decimals])](#NumberHelper.convertToNumber) ⇒ <code>number</code>
  - [.processNumber(value, [decimals])](#NumberHelper.processNumber) ⇒ <code>number</code>

<a name="new_NumberHelper_new"></a>

### new NumberHelper()

NumberHelper Class

<a name="NumberHelper.isNumber"></a>

### NumberHelper.isNumber(n) ⇒ <code>boolean</code>

Checks if element is a number

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  
**Returns**: <code>boolean</code> - Whether the element is a number or not

| Param | Type                                       | Description          |
| ----- | ------------------------------------------ | -------------------- |
| n     | <code>string</code> \| <code>number</code> | The element to check |

<a name="NumberHelper.isInt"></a>

### NumberHelper.isInt(n) ⇒ <code>boolean</code>

Checks if element is an integer

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  
**Returns**: <code>boolean</code> - Whether the number is an integer or not

| Param | Type                                       | Description     |
| ----- | ------------------------------------------ | --------------- |
| n     | <code>string</code> \| <code>number</code> | Number to check |

<a name="NumberHelper.isFloat"></a>

### NumberHelper.isFloat(n) ⇒ <code>boolean</code>

Checks if element is a float number

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  
**Returns**: <code>boolean</code> - Whether the number is a float or not

| Param | Type                                       | Description     |
| ----- | ------------------------------------------ | --------------- |
| n     | <code>string</code> \| <code>number</code> | Number to check |

<a name="NumberHelper.isEven"></a>

### NumberHelper.isEven(n) ⇒ <code>boolean</code>

Checks if number is even

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  
**Returns**: <code>boolean</code> - Whether the number is even or not

| Param | Type                | Description     |
| ----- | ------------------- | --------------- |
| n     | <code>number</code> | Number to check |

<a name="NumberHelper.isOdd"></a>

### NumberHelper.isOdd(n) ⇒ <code>boolean</code>

Checks if number is odd

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  
**Returns**: <code>boolean</code> - Whether the number is odd or not

| Param | Type                | Description     |
| ----- | ------------------- | --------------- |
| n     | <code>number</code> | Number to check |

<a name="NumberHelper.isFinite"></a>

### NumberHelper.isFinite(n) ⇒ <code>boolean</code>

Checks if numer is finite

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  
**Returns**: <code>boolean</code> - Whether the number is finite or not

| Param | Type                | Description     |
| ----- | ------------------- | --------------- |
| n     | <code>number</code> | Number to check |

<a name="NumberHelper.isPrime"></a>

### NumberHelper.isPrime(num) ⇒ <code>boolean</code>

Checks if number is prime

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  
**Returns**: <code>boolean</code> - Whether the numbere is prime or not

| Param | Type                | Description     |
| ----- | ------------------- | --------------- |
| num   | <code>number</code> | Number to check |

<a name="NumberHelper.getRandom"></a>

### NumberHelper.getRandom(min, max) ⇒ <code>number</code>

Gets random integer number in a range

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  
**Returns**: <code>number</code> - Random number in range

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| min   | <code>number</code> | Minimum number |
| max   | <code>number</code> | Maximum number |

<a name="NumberHelper.prefixWithZeros"></a>

### NumberHelper.prefixWithZeros(number, length) ⇒ <code>string</code>

Prefixes a number with zeros until desired length

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  
**Returns**: <code>string</code> - Padded number as a string

| Param  | Type                | Description           |
| ------ | ------------------- | --------------------- |
| number | <code>number</code> | Number to pad         |
| length | <code>number</code> | Desired number length |

<a name="NumberHelper.convertToNumber"></a>

### NumberHelper.convertToNumber(toCheck, [decimals]) ⇒ <code>number</code>

Converts string to number

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  
**Returns**: <code>number</code> - Converted number

| Param      | Type                                       | Default        | Description                    |
| ---------- | ------------------------------------------ | -------------- | ------------------------------ |
| toCheck    | <code>string</code> \| <code>number</code> |                | Number-like to convert         |
| [decimals] | <code>number</code>                        | <code>2</code> | Number of decimals to truncate |

<a name="NumberHelper.processNumber"></a>

### NumberHelper.processNumber(value, [decimals]) ⇒ <code>number</code>

Processes number to get clean value

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  
**Returns**: <code>number</code> - Parsed and processed number

| Param      | Type                                       | Default        | Description                    |
| ---------- | ------------------------------------------ | -------------- | ------------------------------ |
| value      | <code>string</code> \| <code>number</code> |                | String or number to process    |
| [decimals] | <code>number</code>                        | <code>2</code> | No. of decimals to truncate to |
