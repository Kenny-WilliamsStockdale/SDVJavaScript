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

// function returnString (a) {
//     let arr = [] // declaring empty array
//     a.forEach((x) => {
//         arr.push(parseInt(x))
        
//     })
//     return arr.filter((a, b) => arr.indexOf(a) === (b))
// }

// console.log(returnString([1, "22", 'abcde', 7.4, '3', 1]))

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

// function counts (obj) {
//     let likes = obj.likes
//     let dislikes = obj.dislikes
//     likes -= dislikes
//     return likes
// }

// console.log(counts({likes: 20, dislikes: 15}))

// function getCount(object) {
//     let likes = parseInt(object.likes)
//     let dislikes = parseInt(object.dislikes)
//     if (!Number.isInteger(likes) || !Number.isInteger(dislikes)) {
//         return 'not a number'
//     }
//     let difference = likes - dislikes;
//     if (difference > 0) {
//         return difference + ' likes'
//     } else {
//         return Math.abs(difference) + ' dislikes'
//     }
// }
// console.log(getCount(counts))

// function getCount(obj) {
//     let likes = obj.likes
//     //console.log(likes) //44
//     let dislikes = obj.dislikes
 
//     likes -= dislikes
//     //console.log(likes)  //23
//     return likes
// }
 
// console.log(
//     getCount({
//         likes: 44,
 
//         dislikes: 21
//     })
// )
 
// console.log(
//     getCount({
//         likes: 100,
//    ,     dislikes: 100
//     })
 
// )
 
// console.log(
//     getCount({
//         likes: 13,
//         dislikes: 0
//     })
// )
 
// console.log(
//     getCount({
 
//         likes: 2,
//         dislikes: 23
//     })
 
// )
 
// function fancyCode(obj) {
//    , return obj.likes - obj.dislikes
// }
 
// console.log(fancyCode({ likes: 13, dislikes: 0 }))
// console.log(fancyCode({ likes: 2, dislikes: 23 }))
// console.log(fancyCode({ likes: 100, dislikes: 100 }))

//ALI TEST CODE CLASS 
// function indexSearch(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === num) {
//             return i
//         }
//     }
//     return 'wrong'
// }

// function indexSearch (arr, num) {
//     return arr.indexOf(num)
// }
// console.log(indexSearch([3, 5, 6, 8, 9, 0], 0))
// arr=[1,1,3,6,4,65,65,6,,98,,5]
// console.log(arr.length)

// function sumOfCubes (arr) {
//     let sum = 0
//     for (let index = 0; index < array.length; index++) {
//         sum += arr[index] * arr[index] * arr[i]
        
//     }
//     return sum
// }

// const sumCubes =(arr)=> arr.reduce((a,b)=>a+b**3)

// console.log(sumCubes([1,2,3,4,5]))

// function addToArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] += 1 
//     }
//     return arr
    
// }

// console.log(addToArray([1,2,3]))

// let obj = {
//     firstName: 'Kenny',
//     lastName: 'Stockdale'
// }
// console.log(obj.month = 'November')
// console.log(obj)
// console.log(obj.firstName = 'Baz')
// console.log(obj)

const obj = new Object();
obj.name = 'Sharleen'

console.log(obj)