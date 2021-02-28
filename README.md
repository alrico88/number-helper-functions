# number-helper-functions

Library with multiple number-related methods.

## Installation

### Using npm

`npm i number-helper-functions`

### Using yarn

`yarn add number-helper-functions`

## Usage

### In a CommonJS env

```javascript
const NumberHelper = require('number-helper-functions');

NumberHelper.isInt(4); // returns true
```

or

```javascript
const { isFinite } = require('number-helper-functions');

NumberHelper.isFinite(Infinity); // returns false
```

### Using ES6 imports

```javascript
import NumberHelper from 'number-helper-functions';

NumberHelper.isInt(4); // returns true
```

or

```javascript
import { processNumber } from 'number-helper-functions';

NumberHelper.processNumber('4.5432', 2); // returns 4.54
```

## Documentation

## Table of contents

### Classes

- [default](#)

### Type aliases

- [NumberLike](#numberlike)

## Type aliases

### NumberLike

Ƭ **NumberLike**: _string_ \| _number_ \| _null_ \| _undefined_

Defined in: [index.ts:1](https://github.com/alrico88/number-helper-functions/blob/8a2bab7/src/index.ts#L1)

# Class: default

NumberHelper class

**`export`**

## Table of contents

### Constructors

- [constructor](#constructor)

### Methods

- [checkDecimals](#checkdecimals)
- [convertToNumber](#converttonumber)
- [enforceNumber](#enforcenumber)
- [getRandom](#getrandom)
- [isEven](#iseven)
- [isFinite](#isfinite)
- [isFloat](#isfloat)
- [isInt](#isint)
- [isNumber](#isnumber)
- [isOdd](#isodd)
- [isPrime](#isprime)
- [prefixWithZeros](#prefixwithzeros)
- [processNumber](#processnumber)
- [rangeBetween](#rangebetween)

## Constructors

### constructor

\+ **new default**(): [_default_](#)

**Returns:** [_default_](#)

## Methods

### checkDecimals

▸ `Static`**checkDecimals**(`number`: [_NumberLike_](#numberlike)): _number_

Checks the decimals of a number

**`static`**

**`memberof`** NumberHelper

#### Parameters:

| Name     | Type                        | Description                               |
| :------- | :-------------------------- | :---------------------------------------- |
| `number` | [_NumberLike_](#numberlike) | Number to check the amount of decimals of |

**Returns:** _number_

The number of decimals

Defined in: [index.ts:146](https://github.com/alrico88/number-helper-functions/blob/8a2bab7/src/index.ts#L146)

---

### convertToNumber

▸ `Static`**convertToNumber**(`toCheck`: [_NumberLike_](#numberlike), `decimals?`: _number_): _number_

Converts string to number

**`static`**

**`memberof`** NumberHelper

#### Parameters:

| Name       | Type                        | Default value | Description            |
| :--------- | :-------------------------- | :------------ | :--------------------- |
| `toCheck`  | [_NumberLike_](#numberlike) | -             | Number-like to convert |
| `decimals` | _number_                    | 2             | -                      |

**Returns:** _number_

Converted number

Defined in: [index.ts:165](https://github.com/alrico88/number-helper-functions/blob/8a2bab7/src/index.ts#L165)

---

### enforceNumber

▸ `Private` `Static`**enforceNumber**(`n`: [_NumberLike_](#numberlike)): _number_

Converts to number

**`static`**

**`memberof`** NumberHelper

#### Parameters:

| Name | Type                        | Description                           |
| :--- | :-------------------------- | :------------------------------------ |
| `n`  | [_NumberLike_](#numberlike) | Number or string to convert to number |

**Returns:** _number_

The resulting number

Defined in: [index.ts:228](https://github.com/alrico88/number-helper-functions/blob/8a2bab7/src/index.ts#L228)

---

### getRandom

▸ `Static`**getRandom**(`min`: _number_, `max`: _number_): _number_

Gets random integer number in a range

**`static`**

**`memberof`** NumberHelper

#### Parameters:

| Name  | Type     | Description    |
| :---- | :------- | :------------- |
| `min` | _number_ | Minimum number |
| `max` | _number_ | Maximum number |

**Returns:** _number_

Random number in range

Defined in: [index.ts:122](https://github.com/alrico88/number-helper-functions/blob/8a2bab7/src/index.ts#L122)

---

### isEven

▸ `Static`**isEven**(`n`: [_NumberLike_](#numberlike)): _boolean_

Checks if number is even
Any integer that can be divided exactly by 2 is an even number

**`static`**

**`memberof`** NumberHelper

#### Parameters:

| Name | Type                        | Description     |
| :--- | :-------------------------- | :-------------- |
| `n`  | [_NumberLike_](#numberlike) | Number to check |

**Returns:** _boolean_

Whether the number is even or not

Defined in: [index.ts:64](https://github.com/alrico88/number-helper-functions/blob/8a2bab7/src/index.ts#L64)

---

### isFinite

▸ `Static`**isFinite**(`n`: [_NumberLike_](#numberlike)): _boolean_

Checks if numer is finite

**`static`**

**`memberof`** NumberHelper

#### Parameters:

| Name | Type                        | Description     |
| :--- | :-------------------------- | :-------------- |
| `n`  | [_NumberLike_](#numberlike) | Number to check |

**Returns:** _boolean_

Whether the number is finite or not

Defined in: [index.ts:89](https://github.com/alrico88/number-helper-functions/blob/8a2bab7/src/index.ts#L89)

---

### isFloat

▸ `Static`**isFloat**(`n`: [_NumberLike_](#numberlike)): _boolean_

Checks if element is a float number

**`static`**

**`memberof`** NumberHelper

#### Parameters:

| Name | Type                        | Description     |
| :--- | :-------------------------- | :-------------- |
| `n`  | [_NumberLike_](#numberlike) | Number to check |

**Returns:** _boolean_

Whether the number is a float or not

Defined in: [index.ts:47](https://github.com/alrico88/number-helper-functions/blob/8a2bab7/src/index.ts#L47)

---

### isInt

▸ `Static`**isInt**(`n`: [_NumberLike_](#numberlike)): _boolean_

Checks if element is an integer

**`static`**

**`memberof`** NumberHelper

#### Parameters:

| Name | Type                        | Description     |
| :--- | :-------------------------- | :-------------- |
| `n`  | [_NumberLike_](#numberlike) | Number to check |

**Returns:** _boolean_

Whether the number is an integer or not

Defined in: [index.ts:31](https://github.com/alrico88/number-helper-functions/blob/8a2bab7/src/index.ts#L31)

---

### isNumber

▸ `Static`**isNumber**(`n`: [_NumberLike_](#numberlike)): _boolean_

Checks if element is a number

**`static`**

**`memberof`** NumberHelper

#### Parameters:

| Name | Type                        | Description          |
| :--- | :-------------------------- | :------------------- |
| `n`  | [_NumberLike_](#numberlike) | The element to check |

**Returns:** _boolean_

Whether the element is a number or not

Defined in: [index.ts:19](https://github.com/alrico88/number-helper-functions/blob/8a2bab7/src/index.ts#L19)

---

### isOdd

▸ `Static`**isOdd**(`n`: [_NumberLike_](#numberlike)): _boolean_

Checks if number is odd
Any integer that cannot be divided exactly by 2 is an odd number.

**`static`**

**`memberof`** NumberHelper

#### Parameters:

| Name | Type                        | Description     |
| :--- | :-------------------------- | :-------------- |
| `n`  | [_NumberLike_](#numberlike) | Number to check |

**Returns:** _boolean_

Whether the number is odd or not

Defined in: [index.ts:77](https://github.com/alrico88/number-helper-functions/blob/8a2bab7/src/index.ts#L77)

---

### isPrime

▸ `Static`**isPrime**(`num`: _number_): _boolean_

Checks if number is prime
Natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers

**`static`**

**`memberof`** NumberHelper

#### Parameters:

| Name  | Type     | Description     |
| :---- | :------- | :-------------- |
| `num` | _number_ | Number to check |

**Returns:** _boolean_

Whether the numbere is prime or not

Defined in: [index.ts:102](https://github.com/alrico88/number-helper-functions/blob/8a2bab7/src/index.ts#L102)

---

### prefixWithZeros

▸ `Static`**prefixWithZeros**(`number`: _number_, `length`: _number_): _string_

Prefixes a number with zeros until desired length

**`static`**

**`memberof`** NumberHelper

#### Parameters:

| Name     | Type     | Description           |
| :------- | :------- | :-------------------- |
| `number` | _number_ | Number to pad         |
| `length` | _number_ | Desired number length |

**Returns:** _string_

Padded number as a string

Defined in: [index.ts:135](https://github.com/alrico88/number-helper-functions/blob/8a2bab7/src/index.ts#L135)

---

### processNumber

▸ `Static`**processNumber**(`value`: [_NumberLike_](#numberlike), `decimals?`: _number_): _number_

Processes number to get clean value

**`static`**

**`memberof`** NumberHelper

#### Parameters:

| Name       | Type                        | Default value | Description                 |
| :--------- | :-------------------------- | :------------ | :-------------------------- |
| `value`    | [_NumberLike_](#numberlike) | -             | String or number to process |
| `decimals` | _number_                    | 2             | -                           |

**Returns:** _number_

Parsed and processed number

Defined in: [index.ts:184](https://github.com/alrico88/number-helper-functions/blob/8a2bab7/src/index.ts#L184)

---

### rangeBetween

▸ `Static`**rangeBetween**(`start`: _number_, `end`: _number_, `step`: _number_): _number_[]

Creates a range between start and end, including them, according to step

**`static`**

**`memberof`** NumberHelper

#### Parameters:

| Name    | Type     | Description               |
| :------ | :------- | :------------------------ |
| `start` | _number_ | Starting value            |
| `end`   | _number_ | End value                 |
| `step`  | _number_ | Step to use for the range |

**Returns:** _number_[]

The range

Defined in: [index.ts:198](https://github.com/alrico88/number-helper-functions/blob/8a2bab7/src/index.ts#L198)
