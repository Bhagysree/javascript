//ifelse 
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}else{
    console.log("You are a minor.");
}

let isAlive = true;
if (isAlive == false){
    console.log("You are not alive.");
}else{
    console.log("You are dead.");
}

const marks = 75;
let grade;
if (marks >= 90) {
    grade = 'A+';
}else if (marks >= 80) {
    grade = 'A';
}else if (marks >= 70) {
    grade = 'B';
}else if (marks >= 60) {
    grade = 'C';
}else if (marks >= 50) {
    grade = 'D'; 
}
else {
    grade = 'F';
}
console.log(grade);