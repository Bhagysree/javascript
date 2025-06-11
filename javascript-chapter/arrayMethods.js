let fruits = ["apple", "banana", "cherry", "date"];
// index        // 0          // 1         // 2        // 3
//.push() adds an element to the end of the array
fruits.push("elderberry"); // adds "elderberry" to the end of the array
console.log(fruits); // Output: ["apple", "banana", "cherry", "date", "elderberry"]

//unshift() adds an element to the beginning of the array
fruits.unshift("manasa"); // adds "fig" to the beginning of the array
console.log(fruits); // Output: ["manasa", "apple", "banana", "cherry", "date", "elderberry"]


// .pop() removes the last element from the array
fruits.pop(); // removes "elderberry" from the end of the array
console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]
// it follows the lifo principle (last in, first out)


// .shift() removes the first element from the array
fruits.shift(); // removes "apple" from the beginning of the array
console.log(fruits); // Output: ["banana", "cherry", "date"]
// it follows the fifo principle (first in, first out)

//. forEach() executes a provided function once for each array element
let numbers = ["10", "20", "30", "40"];
numbers.forEach((value) => {
    console.log(value); // prints each number in the array
});

//.find() returns the value of the first element in the array that satisfies the provided testing function.

//case1:
let num1 = [1, 2, 3, 4, 5];
let output = num1.find((value) => {
    return value > 3; // finds the first number greater than 3
});console.log(output); // Output: 4

//case2:
let num2 = [1, 2, 3, 4, 5];
num1.find((value) => {
    console.log(value>2); // prints each number in the array
})

//.includes() determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let num3 = [1, 2, 3, 4, 5];
let check = num3.includes(3); // checks if the array includes the number 3
console.log(check); // Output: true

// .sort() sorts the elements of an array in place and returns the sorted array. The sort is not necessarily stable.
//case1: its used when nunbers are under 10
let arr = [5, 3, 8, 4, 1,6, 7,2, 2];
console.log(arr.sort()); // sorts the array in ascending order
//.reverse() reverses the elements of an array in place. The first array element becomes the last and the last becomes the first.
console.log(arr.reverse());

//case2: its used when nunbers are greater than 10
let arr1 = [1, 5, 20, 11, 80, 23, 53, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr1.sort((a, b) => a - b)); // sorts the array in ascending order using a custom comparator function
console.log(arr1.sort((a, b) => b-a));

//.every() tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let arr2 = [1, 2, -3, 4, 5];
let check1 = arr2.every((value) => value > 1); // checks if all numbers in the array are greater than 1{
    console.log(check1);

//.some() tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
let arr3 = [1, 2, -3, 4, 5, 8];
let output1 = arr3.some((value) => value < 0); // checks if at least one number in the array is less than 0
console.log(output1); // Output: true

//.flat() creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let arr4 = [1, 2, [3, 4, 5, 6],[7, 8],[9, 10]];
let final = arr4.flat(); // flattens the array to a depth of 2
console.log(final); // Output: [1, 2, 3, 4, [5, 6], 7, 8, 9, 10]

//.join() joins all elements of an array into a string, separated by a specified separator (default is comma).
let fname = ["D","manasa"];
let output2 = fname.join("*"); // joins the array elements into a string without any separator
console.log(output2); // Output: "D-manasa"

//indexOf() returns the first index at which a given element can be found in the array, or -1 if it is not present.
let names = ["hi", "hello", "manasa", "hi"];
console.log(names.indexOf("hi")); // Output: 0 (the first occurrence of "hi")
console.log(names.indexOf("taj")); // Output: -1 (not found)

//.fill() fills all elements of an array from a start index to an end index with a static value.
let students = ["manasa", "nandu", "adina", "taj"];
console.log(students.fill("bada mai jaa taju"))


/*// .map() creates a new array with the results of calling a provided function on every element in the calling array
let number = [1, 2, 3, 4, 5];
let doubledNumber = numbers.map(function(num) {
    return num * 2; // doubles each number in the array
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]*/