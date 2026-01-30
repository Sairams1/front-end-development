const prompt= require ("prompt-sync")();
let age = Number(prompt("Enter Your Age here :"));
console.log(age + 10);

if (age > 0) {
    console.log("Correct Age")
}
else{
    console.log("Wrong age")
}