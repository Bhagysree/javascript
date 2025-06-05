// object comes with variable name and with key value pair
// left side key 
// right side value

let person = {
    firstname: "bhagya",
    age: 20,
    isalive: true,
}
console.log(person.age); 
console.log(person.firstname);
console.log(person.isalive);

//to add email or any other key value pair
person.email = "bhagya@gmail.com";
person.age = 21; // updating the age
delete person.isalive // deleting the isalive key
console.log(person);

// Array : collection of items and its data types
// stores data in index format starts with 0

let fruits = ["apple", "banana", "cherry"];
//              0        1         2
console.log(fruits[0]); // apple

let cities = ["hyd", "bangalor", "chennai"];
console.log(cities[1]); // bangalor 

cities[1] = "delhi"; // updating the value at index 1
console.log(cities[1]); // delhi

cities[3] = "mumbai"; // adding a new value at index 3
console.log(cities[3]); // mumbai