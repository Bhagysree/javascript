// in javascript , operartors are used to perform operations on variables and values.


// 1. Arithmetic Operators
let a = 10;
let  c= 2;
console.log("Addition:", a + c); // Addition
console.log("Subtraction:", a - c); // Subtraction  
console.log("Multiplication:", a * c); // Multiplication
console.log("Division:", a / c); // Division
console.log("Modulus:", a % c); // Modulus
console.log("Exponentiation:", a ** c); // Exponentiation(a power b)
console.log("Increment:", a++); //  (pre-increment)    
console.log("Decrement:", c--); //  (pre-decrement)


// 2. Assignment Operators
let b = 5;
let t = 10;
//add and assignment
b += t; // equivalent to b = b + t
console.log("Addition Assignment:", b); // Output: 15
//subtract and assignment
b -= t; // equivalent to b = b - t  
console.log("Subtraction Assignment:", b); // Output: 5
//multiplication assignment
b *= t; // equivalent to b = b * t
console.log("Multiplication Assignment:", b); // Output: 50
//division assignment
b /= t; // equivalent to b = b / t
console.log("Division Assignment:", b); // Output: 5
//modulus assignment
b %= t; // equivalent to b = b % t  
console.log("Modulus Assignment:", b); // Output: 0


// 3. Comparison Operators
let x = 10;
let y = 20;
let z = "10";
console.log("Equal to:", x == z); // true (value comparison)
console.log("Strict Equal to:", x === z); // false (value and type comparison)
console.log("Not Equal to:", x != y); // true (value comparison)
console.log("Strict Not Equal to:", x !== z); // true (value and type comparison)
console.log("Greater than:", x > y); // false
console.log("Less than:", x < y); // true
console.log("Greater than or Equal to:", x >= z); // true
console.log("Less than or Equal to:", x <= y); // true

// 4. Logical Operators
let a1 = true;
let b1 = false;
console.log("Logical AND:", a1 && b1); // false
console.log("Logical OR:", a1 || b1); // true
console.log("Logical NOT:", !a1); // false
console.log("Logical NOT:", !b1); // true

// 5. Bitwise Operators
let bit1 = 5; // 0101 in binary 
let bit2 = 3; // 0011 in binary
console.log("Bitwise AND:", bit1 & bit2); // 0001 in binary (1 in decimal)
console.log("Bitwise OR:", bit1 | bit2); // 0111 in binary (7 in decimal)
console.log("Bitwise XOR:", bit1 ^ bit2); // 0110 in binary (6 in decimal)
console.log("Bitwise NOT:", ~bit1); // 1010 in binary (inverts bits)
console.log("Left Shift:", bit1 << 1); // 1010 in binary (10 in decimal)
console.log("Right Shift:", bit1 >> 1); // 0010 in binary (2 in decimal)
console.log("Unsigned Right Shift:", bit1 >>> 1); // 0010 in binary (2 in decimal)

// 6. Ternary Operator
//shortcut for if-else statements
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}
else {
    console.log("You are a minor.");
}
// Using Ternary Operator
let age1 = 18;
let output = (age1 >= 18) ? "You are an adult." : "You are a minor.";
console.log(output); // Output: You are an adult.