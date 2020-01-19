<a name="NumberHelper"></a>

## NumberHelper
**Kind**: global class  

* [NumberHelper](#NumberHelper)
    * [new NumberHelper()](#new_NumberHelper_new)
    * [.isNumber(n)](#NumberHelper.isNumber) ⇒ <code>boolean</code>
    * [.isInt(n)](#NumberHelper.isInt) ⇒ <code>boolean</code>
    * [.isFloat(n)](#NumberHelper.isFloat) ⇒ <code>boolean</code>
    * [.isEven(n)](#NumberHelper.isEven) ⇒ <code>boolean</code>
    * [.isOdd(n)](#NumberHelper.isOdd) ⇒ <code>boolean</code>
    * [.convertToNumber(toCheck, [decimals])](#NumberHelper.convertToNumber) ⇒ <code>number</code>
    * [.processNumber(value, [decimals])](#NumberHelper.processNumber) ⇒ <code>number</code>

<a name="new_NumberHelper_new"></a>

### new NumberHelper()
NumberHelper Class

<a name="NumberHelper.isNumber"></a>

### NumberHelper.isNumber(n) ⇒ <code>boolean</code>
Checks if element is a number

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  

| Param | Type |
| --- | --- |
| n | <code>string</code> \| <code>number</code> | 

<a name="NumberHelper.isInt"></a>

### NumberHelper.isInt(n) ⇒ <code>boolean</code>
Checks if element is an integer

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  

| Param | Type |
| --- | --- |
| n | <code>string</code> \| <code>number</code> | 

<a name="NumberHelper.isFloat"></a>

### NumberHelper.isFloat(n) ⇒ <code>boolean</code>
Checks if element is a float number

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  

| Param | Type |
| --- | --- |
| n | <code>string</code> \| <code>number</code> | 

<a name="NumberHelper.isEven"></a>

### NumberHelper.isEven(n) ⇒ <code>boolean</code>
Checks if number is event

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  

| Param | Type |
| --- | --- |
| n | <code>number</code> | 

<a name="NumberHelper.isOdd"></a>

### NumberHelper.isOdd(n) ⇒ <code>boolean</code>
Checks if number is odd

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  

| Param | Type |
| --- | --- |
| n | <code>number</code> | 

<a name="NumberHelper.convertToNumber"></a>

### NumberHelper.convertToNumber(toCheck, [decimals]) ⇒ <code>number</code>
Converts string to number

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| toCheck | <code>string</code> \| <code>number</code> |  | Number-like to convert |
| [decimals] | <code>number</code> | <code>2</code> | Number of decimals to truncate |

<a name="NumberHelper.processNumber"></a>

### NumberHelper.processNumber(value, [decimals]) ⇒ <code>number</code>
Processes number to get clean value

**Kind**: static method of [<code>NumberHelper</code>](#NumberHelper)  
**Returns**: <code>number</code> - Parsed and processed number  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>string</code> \| <code>number</code> |  | String or number to process |
| [decimals] | <code>number</code> | <code>2</code> | No. of decimals to truncate to |

