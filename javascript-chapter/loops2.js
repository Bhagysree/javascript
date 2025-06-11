//for..of- used to loop over the value of an array
let arr = ["manasa", "taj", "adina", "nandu"];
for(let value of arr) {
    console.log(value);
}

//for..in - used to loop over the keys(indexes) of an array and objects.
let person = {
    fname: "kaju",
    age: 30,
    city: "hyderbad"
}
for (let key in person) {
    console.log(key, person[key]);
}

//