### About: 
Function "stringToDate" parse string. It returns object of Date. If format or date are invalid then it returns null.

### Example: 

```javascript
import { stringToDate } from 'string-to-date'

const date = stringToDate('2018-02-13 10:22:35')

console.log(date instanceof Date) //true
console.log(date.getFullYear()) //2018
console.log(date.getMonth()) //1
console.log(date.getDate()) //13
console.log(date.getHours()) //10
console.log(date.getMinutes()) //22
console.log(date.getSeconds()) //35

console.log(stringToDate('qwerty')) //null
```

### Params:
| Name | Type | Default |
| --- | --- | --- |
| date | string | |
| format | string | YYYY-MM-DD HH:mm:ss |
