let myObject = {
    name: "John",
    age: 30,
    city: "New York",
    favFruit: 
    ["mango","banana","apple"],
    "phone number": "123-456-7890"
    
};
console.log(myObject.name); // Accessing property using dot notation
console.log(myObject["age"]); // Accessing property using bracket notation
console.log(myObject.city);
console.log(myObject.favFruit[0]); // Accessing array element inside object

delete myObject.age; // Deleting a property
console.log(myObject);
console.log(myObject.age); // Accessing deleted property will return undefined

console .log(myObject["phone number"]);
myObject["phone number"] = "987-654-3210"; // Updating property with space in name
console.log(myObject["phone number"]);

