// Values & Variables

let f = 5  // declare variable and number value
let g = f  // declare new variable where value = previous declared variable
console.log(f) // 5
console.log(g) // 5
console.log(f === g) // true   
f = 10
console.log(f) // 10
console.log(g) // 5
console.log(f === g) // false

let country = 'New Zealand'
let city = 'Nelson' //data type string
let postalCode = 7010 // data type number

console.log(country);
console.log(city);
console.log(postalCode);

let isIsland = true // data type boolean
let language  // 
console.log(isIsland)
console.log(language)

language = 'English'
console.log(language)

let number = 10 
console.log(number)

console.log(number / 2)
console.log(number > 6)
console.log(number < 2)

const address = country + " " + city + " " + postalCode
console.log(address)

let string = `My address is ${country}, ${city}, ${postalCode}.`
console.log(string)

let x = 10;

    if(x < 0) {         // if and else statement example
        console.log('Ali')
} else {
    console.log('its false')
}

x = 'Ali'
if (x === 'Ali' || typeof 'string') {
    console.log('this is true')
} else {
    console.log('Error')
}

x = '1234567'
console.log(typeof x)  // playing around with more Variables and learning how to convert data types and save then with other Variables
let y = Number(x)
//console.log()
console.log(typeof y)

const a = 1+1    // using multiple variables to add values to one and other just print out not save. 
console.log(a)

const b = a + 50
console.log(b)

let z           // making undefined datatype 
console.log(z)

const information = {  // Example of using object template 
    student : 'Ali',
    country : 'Iraq',
    city : 'Nelson',
    postalCode : 7010
}
console.log(information)

let myInfo = {             // Example of object using different keyword 
    name : 'Kenny Stockdale',
    age : '27',
    study : 'Nmit',
    postalCode : 7010,
    country : 'New Zealand'
}
console.log(myInfo)

// country = 'Iraq'
// if (typeof country === 'string') {   //Generic code instead of hardcoded
//     console.log('True')
// } else {
//     console.log('False')
// }

// let example = 100;   // another if or else statement example 

// if( example < 50) {
//     console.log('tis good')
// } else {
//     console.log('no good delete')
// }

let c = 11              // logic gate / ES6 operator example (hard to follow)

if (c === 11 || typeof c === 'string') {  // true because of || or operator c = 11 so true 
    console.log('its true')
} else {
    console.log('error')
}

let v = 11              // logic gate / ES6 operator example (hard to follow) using different logic gates

if (v != 11) {  // not equal to comes up false because v IS 11 
    console.log('its true')
} else {
    console.log('error')
}

let n = 11              // logic gate / ES6 operator example (hard to follow) using different logic gates

if (n) {  // short hand ES6 
    console.log('its true')
} else {
    console.log('error')
}

