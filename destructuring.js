// destructuring = extracting values from arrays or objects into distinct variables.
// [] = array destructuring
// {} = object destructuring


// swap the values of two variables
let a = 5;
let b = 11;
[a,b] = [b,a];
console.log(a); //11
console.log(b); //5

console.log("-".repeat(50));

// swap two elements in an array
const colors =["Blue", "Red", "Black"];
[colors[0], colors[2]] = [colors[2], colors[0]];
console.log(colors); //['Black', 'Red', 'Blue']

console.log("-".repeat(50));
// extract values from objects
const person1 = {
    name: "John",
    age: 30,
    city: "New York"
};

const person2 = {
    name: "Rahul",
    age: 25,
    city: "Delhi"
};


const {name, age, city} = person2;
console.log(name); //John
console.log(age); //30
console.log(city); //New York

console.log("-".repeat(50));

function display({name, age, city}){
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

display(person1); //Name: John, Age: 30, City: New York 