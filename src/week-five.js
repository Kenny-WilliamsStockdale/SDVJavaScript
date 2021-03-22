// LOOK AT THIS https://hellodeveloper2020.gitbook.io/sdv503/switch-statement

// const mark = 70;  //switch, cases  Switch statement
// switch (mark) {
// case 85:
//     console.log('A+');
//     break;  //breaks/ stops code here then goes on to read next line 
// case 80:
//     console.log('A');
//     break;
// case 75:
//     console.log('B+');
//     break;
// case 70:
//     console.log('B');
//     break;
// default:
//     console.log('C');
//     break;
// }

// let person = {  // object
//     name: 'tony',
//     age: 20,
//     driver: null
// };

// if (person.age >= 16) {  //if, else statement
//     person.driver = 'Yes';
// } else {
//     person.driver = 'No';
// }

// person.driver = person.age >=16 ? 'Yes' : 'No'; //Ternary operator

// console.log(person.driver);


// let isStudent = false;  //ternary operator code
// let price = isStudent ? 8 : 12  // condition: finding out the price (result of this condition) = checking isStudent variable true/false ? if true = 8 : if false = 12
// console.log(price); 


// Example nested if else statement
// let price
// let isSenior = true
// let isStudent = false
// if (isStudent) {
//     price = 8 
// } else if (isSenior) {
//     price = 6
// } else {
//     price = 10
// }
// console.log(price)

// let isStudent = false;  // nested ternary operator example 
// let isSenior = true; let price = isStudent ? 8 : isSenior ? 6 : 10
// console.log(price);

// let isStudent = true;  // multiple operations example this works in the console of the browser as i do not have full node installed.
// let price = 12;isStudent ? (
//     price = 8,
//     alert('Please check for student ID')
// ) : (
//     alert('Enjoy the movie')
// );

//FOR LOOPS

// for (initialize; condition; increment);  // for loop syntax
// for (initialize; condition; increment) single statement;
// for (initialize; condition; increment) { multiple; statements; }

for (i = 0; i <= 5; i++) {
    console.log('This is a loop') // for loop goes currently 6 times in total remember arrays/loops start at 0 
}

let arr = [1,2,3,4,5,6,7]
console.log(arr.length) // reading array as 7
for (i = 0; i <= arr.length; i++) {
    console.log('this is a loop') // similar as for loop above but using array length as reference and printing 8 in total since i = 0 to start. 
}

for (let i = 0;; i++) {  // 0 based index counter, start at 0 and loops until i value is greater than 1 or more specifically will read and print value of 2 then break/stop  
    console.log("loop, i = " + i);
    if (i > 1)
        break;
};

let counter = 0; //multiple statements   GET MORE INFO ON THIS!!
function inc() { counter++; }for (let i = 0; i < 10; i++, inc());
console.log(counter); // 10
console.log(i)

for (var i = 0; i < 10; i++) { // for loop with a let scope kinda like an if statement in a sense (the structure)  
    let x = i;
    console.log(x)
}

for (let y = 0; y < 2; y++) {// nested loop y will execute and print first. Both variables will stop until the catch up with each other.
    for (let x = 0; x < 2; x++)
        console.log(x, y);
}

for (let i = 0; i < 3; i++) console.log('"loop."'); // The condition statement will usually check if counter has reached a limit and if so, the loop will terminate

for (let i = 0; i < 10; i++) { if (i == 5) continue; console.log( i ); } //skipping a step with the continue keyword

for (let i = 0;; i++) { console.log("loop"); break; };