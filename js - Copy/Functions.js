function greet(name) {
    console.log("Hello, " + name + "!");
    return;
}   
sum  = greet("Alice");

function add(a, b) {
    return a + b;
}
console.log(add(5, 3));

// Arrow function
const addition = (x, y) => {
    return x + y;
}   
console.log(addition(5 ,15));

// expalaning global and local scope
let globalVar  = "I am a global variable";
function myFunction () {
    let localVar = "I am a local variable";
    console.log(localVar);
}
myFunction();
console.log(globalVar);