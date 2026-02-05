let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // Output the entire array

console.log(myArray[0]);

myArray.push(6); // Adding an element to the end
console.log(myArray);

myArray.pop(); // Removing the last element
console.log(myArray);

myArray.shift(); // Removing the first element
console.log(myArray);

myArray.unshift(1); // Adding an element to the beginning
console.log(myArray);

let myArray1= [10, 20, 30, 40, 50];

console.log(myArray1.indexOf(40)); // Getting the index of an element in the array

b =myArray1.slice(1,4); // Slicing the array from index 1 to 3
console.log(b);
console.log(myArray1);

// map and filter
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2); // Using map to double each element
const greaterThanTwo = numbers.filter(num => num > 2); // Using filter to get elements greater than 2
console.log(doubled);
console.log(greaterThanTwo);