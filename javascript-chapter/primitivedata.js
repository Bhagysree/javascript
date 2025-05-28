/* primitive data types :
there are 7 primitive data types in JavaScript:
1. null
2. number
3. symbol
4. string
5. boolean
6. bigint
7. undefined

*/

let a = null; // null is a special value that represents the absence of any object value
let b = 356; // number is a numeric data type that can represent both integers and floating-point numbers
let c = true
let d = BigInt("1234567890123456789012345678901234567890"); // bigint is a numeric data type that can represent integers of arbitrary size
let e = "bhagya"; // string is a sequence of characters used to represent text
let f = Symbol("unique"); // symbol is a unique and immutable data type used to create unique identifiers
let g; // undefined is a data type that represents a variable that has been declared but not assigned a value

console.log(a, b, c, d, e, f, g);
console.log(typeof d); // null is an object type in JavaScript

/*non primitive data types
1. objects*/
let person = {
    name: "bhagya",
    age: 25,
    isStudent: true,
    hobbies: ["reading", "coding", "gaming"],
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};
console.log(person["name"]); // Accessing object properties using dot notation
console.log(person.age); // Accessing object properties using bracket notation
