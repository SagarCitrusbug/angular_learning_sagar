// For Loop
for(let i=0; i<10; i++){
    console.log(i);
}

// While
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}
console.log("---------------------------------------------")
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
]

for(let i=0; i < todos.length; i++){
    console.log(todos[i].text)
}


// for of method use for direct array extract
for(let todo of todos){
    console.log(todo)
}


// forEach use for extract direct array.
console.log("===== forEach function use ====");
todos.forEach(function(todo){
    console.log(todo.text)
});

// map function use for make/create array from array
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log("===== Map function use ====");
console.log(todoText);

// Filter function use for filer array/dict value.
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted == true;
});
console.log("===== filter function use ====");
console.log(todoCompleted);

// filter and map function use at time.
const todoFilterMap = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text
});
console.log("===== filter and map function use together ====");
console.log(todoFilterMap);

// tripal equal to use match datatype with value.
console.log("===== tripal equal to use match datatype with value =====");
const x = '10';
if( x === 10){
    console.log("value and datatype is match.");
}else{
    console.log("value and datatype doesn't match!");
}

// DOUBLE equal to use only value match.
console.log("===== DOUBLE equal to use only value match. =====")
const y = '10';
if( y == 10){
    console.log("value is match.");
}else{
    console.log("value doesn't match!");
}

// Ternary operator
const color = x > 10 ? 'red':'blue';
console.log("===== Ternary operator ======");
console.log(color)

// Function
function addNums(num1, num2){
    console.log("Add num using normal function:-",num1+num2);
}
addNums(1,2);

// Default arug in function:
function addNums(num1=1, num2=1){
    console.log("Add num using Default arug function:-",num1+num2);
}
addNums();

// console log after function return.
const addNum = (num1=1, num2=1) => {
    return num1+num2;
}
console.log(addNum(3,5));