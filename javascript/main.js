//const age = 30;
//age = 31;
//console.log(age);

// Error while update value
// Uncaught TypeError: Assignment to constant variable

let score;
score = 100;
console.log(score)


const s = 'Hello World!'

// slice the string use substring function.
console.log(s.substring(0, 5))

// string convert any case to  uppercase use toUpperCase function.
console.log(s.substring(0, 5).toUpperCase())

// split the string and convert in Array use split function.
console.log(s.split(''))

// Array
const arr = new Array('apples', 'oranges', 'pears')
console.log(arr)

// add value in Array
arr[3] = 'grapes'
console.log(arr)

// add value in last of array
arr.push('mangos')
console.log(arr)

// add value at first of array
arr.unshift('kiwy')
console.log(arr)

// remove last value in array
arr.pop()
console.log(arr)

// check value is array or not
console.log(Array.isArray(arr))

// find index of any value present in array.
console.log(arr.indexOf('kiwy'))




