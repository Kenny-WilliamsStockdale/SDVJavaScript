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


let isStudent = false;  //ternary operator code
let price = isStudent ? 8 : 12  // condition: finding out the price (result of this condition) = checking isStudent variable true/false ? if true = 8 : if false = 12
console.log(price); 