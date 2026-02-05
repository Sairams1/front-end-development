// conditional statements
let age = 18;
if (age >= 21) {
    console.log("You are a minor.");
} 
else if (age === 18) {
    console.log("You are just an adult.");
}
else {
    console.log("You are an child.");
}       


// switch case
let a = "Tuesday";
switch (a) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
}


// LOPPS
for (let i = 1; i <= 10; i++) {
    console.log(i * 2);
}

let count = 1;
while (count <=5) {
    console.log( count *2);
    count++;
}

// do while loop
let count1 = 1;
do {
    console.log(count1 * 2);
    count1++; 
}
while (count1 <=10);

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break // Skip the iteration when i is 3
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the iteration when i is 5
    }
    console.log(i);
}

