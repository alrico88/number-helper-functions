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
import * as NumberHelper from 'number-helper-functions';

NumberHelper.isInt(4); // returns true
```

or

```javascript
import { processNumber } from 'number-helper-functions';

NumberHelper.processNumber('4.5432', 2); // returns 4.54
```

## Documentation

## Table of contents

### Functions

- [checkDecimals](#checkdecimals)
- [convertToNumber](#converttonumber)
- [enforceNumber](#enforcenumber)
- [getRandom](#getrandom)
- [isEven](#iseven)
- [isFloat](#isfloat)
- [isInt](#isint)
- [isNumber](#isnumber)
- [isOdd](#isodd)
- [isPrime](#isprime)
- [prefixWithZeros](#prefixwithzeros)
- [processNumber](#processnumber)
- [rangeBetween](#rangebetween)

## Functions

### checkDecimals

▸ **checkDecimals**(`number`: NumberLike): _number_

Checks the decimals of a number

#### Parameters:

| Name     | Type       | Description                               |
| :------- | :--------- | :---------------------------------------- |
| `number` | NumberLike | Number to check the amount of decimals of |

**Returns:** _number_

The number of decimals

Defined in: modules/format.ts:21

---

### convertToNumber

▸ **convertToNumber**(`toCheck`: NumberLike, `decimals?`: _number_): _number_

Converts string to number

#### Parameters:

| Name       | Type       | Default value | Description            |
| :--------- | :--------- | :------------ | :--------------------- |
| `toCheck`  | NumberLike | -             | Number-like to convert |
| `decimals` | _number_   | 2             | -                      |

**Returns:** _number_

Converted number

Defined in: modules/format.ts:38

---

### enforceNumber

▸ **enforceNumber**(`n`: NumberLike): _number_

#### Parameters:

| Name | Type       |
| :--- | :--------- |
| `n`  | NumberLike |

**Returns:** _number_

Defined in: modules/base.ts:3

---

### getRandom

▸ **getRandom**(`min`: _number_, `max`: _number_): _number_

Gets random integer number in a range

#### Parameters:

| Name  | Type     | Description    |
| :---- | :------- | :------------- |
| `min` | _number_ | Minimum number |
| `max` | _number_ | Maximum number |

**Returns:** _number_

Random number in range

Defined in: modules/random.ts:8

---

### isEven

▸ **isEven**(`n`: NumberLike): _boolean_

Checks if number is even
Any integer that can be divided exactly by 2 is an even number

#### Parameters:

| Name | Type       | Description     |
| :--- | :--------- | :-------------- |
| `n`  | NumberLike | Number to check |

**Returns:** _boolean_

Whether the number is even or not

Defined in: modules/checks.ts:49

---

### isFloat

▸ **isFloat**(`n`: NumberLike): _boolean_

Checks if element is a float number

#### Parameters:

| Name | Type       | Description     |
| :--- | :--------- | :-------------- |
| `n`  | NumberLike | Number to check |

**Returns:** _boolean_

Whether the number is a float or not

Defined in: modules/checks.ts:34

---

### isInt

▸ **isInt**(`n`: NumberLike): _boolean_

Checks if element is an integer

#### Parameters:

| Name | Type       | Description     |
| :--- | :--------- | :-------------- |
| `n`  | NumberLike | Number to check |

**Returns:** _boolean_

Whether the number is an integer or not

Defined in: modules/checks.ts:20

---

### isNumber

▸ **isNumber**(`n`: NumberLike): _boolean_

Checks if element is a number

#### Parameters:

| Name | Type       | Description          |
| :--- | :--------- | :------------------- |
| `n`  | NumberLike | The element to check |

**Returns:** _boolean_

Whether the element is a number or not

Defined in: modules/checks.ts:10

---

### isOdd

▸ **isOdd**(`n`: NumberLike): _boolean_

Checks if number is odd
Any integer that cannot be divided exactly by 2 is an odd number.

#### Parameters:

| Name | Type       | Description     |
| :--- | :--------- | :-------------- |
| `n`  | NumberLike | Number to check |

**Returns:** _boolean_

Whether the number is odd or not

Defined in: modules/checks.ts:60

---

### isPrime

▸ **isPrime**(`num`: _number_): _boolean_

Checks if number is prime
Natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers

#### Parameters:

| Name  | Type     | Description     |
| :---- | :------- | :-------------- |
| `num` | _number_ | Number to check |

**Returns:** _boolean_

Whether the numbere is prime or not

Defined in: modules/checks.ts:71

---

### prefixWithZeros

▸ **prefixWithZeros**(`number`: _number_, `length`: _number_): _string_

Prefixes a number with zeros until desired length

#### Parameters:

| Name     | Type     | Description           |
| :------- | :------- | :-------------------- |
| `number` | _number_ | Number to pad         |
| `length` | _number_ | Desired number length |

**Returns:** _string_

Padded number as a string

Defined in: modules/format.ts:12

---

### processNumber

▸ **processNumber**(`value`: NumberLike, `decimals?`: _number_): _number_

Processes number to get clean value

#### Parameters:

| Name       | Type       | Default value | Description                 |
| :--------- | :--------- | :------------ | :-------------------------- |
| `value`    | NumberLike | -             | String or number to process |
| `decimals` | _number_   | 2             | -                           |

**Returns:** _number_

Parsed and processed number

Defined in: modules/format.ts:55

---

### rangeBetween

▸ **rangeBetween**(`start`: _number_, `end`: _number_, `step`: _number_): _number_[]

Creates a range between start and end, including them, according to step

#### Parameters:

| Name    | Type     | Description               |
| :------ | :------- | :------------------------ |
| `start` | _number_ | Starting value            |
| `end`   | _number_ | End value                 |
| `step`  | _number_ | Step to use for the range |

**Returns:** _number_[]

The range

Defined in: modules/utilities.ts:12
