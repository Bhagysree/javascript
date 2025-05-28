/* variables:
variable is a dynamic type language, meaning that variables can hold values of different types at different times.
variables can be change on run time in numbers, arrays, and objects.
js is dynamically typed, meaning that variables do not have a fixed type and can hold values of any type.
static typing is a feature of some programming languages where variables have a fixed type that cannot change during the program's execution.

variables is a container to store a value.
*/

var a = 10;
console.log(a);
a = "bhagya";
console.log(a);

/*
rules for naming variables:
1.letters, numbers, underscores, and $ signs are allowed.
2. begain with a letter, underscore, or $ sign and does not start with a number(key words).
3.its a case sensitive language.
*/

/*
var and let and const:
1. var is scoped while let & const are block scoped.
2. var can be updated & re-declared within its scope 
3. while let can be updated but not re-declared
4. const cannot be updated or re-declared.
5. var variables are initialized with undefined, while let and const variables are not initialized.
6. cost must be initialized during declaration, while let can be declared without initialization.
*/

var a = 10;
var b = "bhagya";
var c = null;
var d = undefined;
{
    var b = "sree";
    console.log(b);   
}
console.log(b);


var a = 10;
let b = "bhagya";
var c = null;
var d = undefined;
{
    let b = "sree";
    console.log(b);   
}
console.log(b);

const authors = "bhagya";
authors = "sree"; // This will throw an error because const cannot be reassigned
console.log(authors);