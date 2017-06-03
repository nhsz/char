# char

[![NPM](https://nodei.co/npm/char.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/char/)

> Return the string representing a character whose Unicode code point is the integer `code`.  
ES6 implementation of **[`Python built-in chr()`](https://docs.python.org/3.6/library/functions.html#chr)** function

This is the inverse of **[`ordr`](https://www.npmjs.com/package/ordr)**.

**The valid range for the argument is from 0 through 1114111 (0x10FFFF in base 16)**. RangeError will be raised if `code` is outside that range.


## Install

```
$ npm install --save char
```


## Usage

```js
const chr = require('char')

console.log(chr(65))
// => 'A'

console.log(chr(97))
// => 'a'

console.log(chr(8364))
// => '€'

console.log(chr(64))
// => '@'

console.log(chr(-1))
// => RangeError: Invalid code point -1
```


## License

MIT © **[`Nicolás Quiroz`](https://nicolasquiroz.com)**
