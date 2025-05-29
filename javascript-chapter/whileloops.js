let input = prompt("Enter a number");
input = Number(input);
let i = 0;

while (i < input) {
    console.log(i);  // print the current value of i
    i++;  // increment i by 1
}

let input = prompt("Enter a number");
input = Number(input);
let i = 0;

while (i < input) {
    console.log(i);  // print the current value of i
}


let input;
do {
    input = prompt("Enter a number");
    input = Number(input);
} while(isNaN(input));

let i = 0;
do {
    console.log(i);
    i++;
} while(i < input);