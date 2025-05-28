//read
//write
//update
//delete
//all these object

let person = {
    firstName: "Bhagya",
    lastName: "Sree",
    age: 21,
    email: "tellibhagyasree@gmail.com",
    isAlive: true,
    isSleep: null,
};
console.log(person);
person.phone = 8008088191; // Adding a new property
console.log(person);

person.age = 20; // Updating an existing property
console.log(person);

delete person.isAlive; // Deleting another property
console.log(person);
delete person.isSleep; // Deleting another property
console.log(person);