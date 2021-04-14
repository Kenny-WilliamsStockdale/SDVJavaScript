//Task_1
// function odd (x) {
//     let arr = []
//     for (let i = 0; i <= x; i++){
//         // console.log(i)
//     if( i%2 !== 0) {
//         arr.push(i)
//     } 
//     // console.log(arr) debugging
// }
//     // return arr.reduce((a,b)=>a+b) // reduce method
//     let result = 0
//     for (let a = 0; a < arr.length; a++) {  // for loop method
//         result += arr[a]
//     }
//     // arr.forEach(element => { // forEach method
//     //     result += element
//     // });
//     return result
// }
// console.log(odd(13))

// Task_2
// TODO: Create a function that takes an array of non-negative integers and strings 
// and return a new array without the strings.
// make function
// make an array
// input is non-negative integers and strings
// return with a new array
// outputs with out string data type 
// Ex:  filterArr([1, 2, "a", "b"]) -> [1, 2]
// Ex:  filterArr([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

function returnString (a) {
    let arr = [] // declaring empty array
    a.forEach((x) => {
        arr.push(parseInt(x))
        
    })
    return arr.filter((a, b) => arr.indexOf(a) === (b))
}

console.log(returnString([1, "22", 'abcde', 7.4, '3', 1]))

// Given an object containing counts of both likes and dislikes of a facebook post, 
//return a number of count for either likes or dislikes should be displayed. 
//This is calculated by subtracting the number of dislikes from likes.

//ANCHOR TASK_3:
//make a function 
//make an object
//input properties
//input data to properties
//return a number count for likes and dislikes
//subtract dislikes from likes

          // => 20 (dot notation)

// words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
// const appendedWords = words.filter( (word, index, arr) => {
//   arr.push('new')
//   return word.length < 6
// })

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// let result = words.filter(word => word.length > 6)
// if (typeof result !== "number" ) {
//         return false;}
// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// function stringToNumber(arr) {       //converts string data value numbers into  data value numbers using number constructor
//     return arr.map(x => Number(x));
// }

// function stringToNumber(arr){
//     newArr = []  // declaring empty array
//     arr.forEach((x) => {  // doing a for each loop
//         newArr.push(parseInt(x)) // pushing in a new element to the array mentioned above and parsing it into a integer 
//     })
//     return newArr
// }
// console.log(stringToNumber(["9.4", "4.2"]));

// function isEmpty(obj) {
//     for(let key in obj){
//         return false
//     }
//     return true
// }

// isEmpty({ a: 1 })


// function facebook (a, b) {
//     let fb = new Object();
//     console.log(fb)
//     fb.likes = a;
//     fb.dislikes = b;
//     console.log(fb)
//     return console.log(fb = fb.likes - fb.dislikes)
// }
// console.log(facebook(10, 4))

function test(obj) {
    return obj.num1-obj.num2
}

console.log(test({num1: 9, num2: 10}))