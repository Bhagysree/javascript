// in primitive we can store only single type of data.

/*in non primitive data types we can store multiple types of data .

example :
//objects
//arrays

//objects are store multiple types of data types
in object we can store multiple key value pair
left side is key and right side is value

*/

let person = {
    firstName: "Bhagya",
    lastName: "Sree",
    age: 21,
    isAlive: true,
    isSleep: null
};

console.log(person);
console.log(person.firstName);
console.log(person.age);

let myfriends = {
    friend1: { 
        name: "bhagya",
         age: 21,
          isAlive: true },
    friend2: { 
        name: "rabbit",
         age: 28, 
         isAlive: true },
    friend3: { 
        name: "independentG", 
        age: 23, 
        isAlive: true },
    friend4: { 
        name: "taj", 
        age: 27, 
        isAlive: true }
  
}
console.log(myfriends);
console.log(myfriends.friend1.name);