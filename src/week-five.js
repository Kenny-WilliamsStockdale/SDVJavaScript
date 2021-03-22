// LOOK AT THIS https://hellodeveloper2020.gitbook.io/sdv503/switch-statement

const mark = 70;  //switch, cases  Switch statement
switch (mark) {
case 85:
    console.log('A+');
    break;  //breaks/ stops code here then goes on to read next line 
case 80:
    console.log('A');
    break;
case 75:
    console.log('B+');
    break;
case 70:
    console.log('B');
    break;
default:
    console.log('C');
    break;
}

let person = {  // object
    name: 'tony',
    age: 20,
    driver: null
};

if (person.age >= 16) {  //if, else statement
    person.driver = 'Yes';
} else {
    person.driver = 'No';
}

person.driver = person.age >=16 ? 'Yes' : 'No'; //Ternary operator

console.log(person.driver);


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