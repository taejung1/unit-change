<div align="center"><h1>unit-change</h1><h3>change the number unit</h3>

## Example
```js
const { second, minute, hour, day, week, hex } = require('unit-change');

console.log(second(10));  // 10000
console.log(minute(10));  // 600000
console.log(hour(10));    // 36000000
console.log(day(10));     // 864000000
console.log(week(10));    // 6048000000
console.log(hex(10));     // 7WFgf7mHH0

```
```js
const unit = require('unit-change');

console.log(unit.second(10));  // 10000
console.log(unit.minute(10));  // 600000
console.log(unit.hour(10));    // 36000000
console.log(unit.day(10));     // 864000000
console.log(unit.week(10));    // 6048000000
console.log(unit.hex(10));     // 7WFgf7mHH0
```