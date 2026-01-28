//Spread Operator = ...(three dots) It expand elements.
//Used in: 1. Function Calls 2. Array Literals 3. Object Literals

//1. Seperate String into individual characters
let username = "Pikku";
let letters = [...username];
console.log(letters); //['P', 'i', 'k', 'k', 'u']

console.log("-".repeat(50));

let words = [...username].join("-");
console.log(words); //P-i-k-k-u

console.log("-".repeat(50));

//2. Copy Array
let fruits = ["Apple", "Bannana", "Mango"];
let fruitsCopy = [...fruits];
console.log(fruitsCopy); //['Apple', 'Bannana', 'Mango']
