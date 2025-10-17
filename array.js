// Create an array
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits); // ["Apple", "Banana", "Mango"]

// Add element at the end → push
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

// Remove last element → pop
fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Mango"]

// Add element at the start → unshift
fruits.unshift("Strawberry");
console.log(fruits); // ["Strawberry", "Apple", "Banana", "Mango"]

// Remove first element → shift
fruits.shift();
console.log(fruits); // ["Apple", "Banana", "Mango"]
