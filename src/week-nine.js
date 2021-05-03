// create a function tht concatenates n input arrays, where n its variable 

// firstFun([1,2,3], [5,6,7], [8,9,10]) => [1,2,3,4,5,6,7,8,9,10]

//Answer

function firstFun(args) {
    let result =[]
        for (i =0; i < (arguments.length); i++) {
            result = result.concat(arguments[i]);
        }
        return result
}

// ES6

function esSixFunc(...args){
    return [].concat(...args)
}

// create a function that takes two arguments (number, length)
// secondFunc(7, 5) => [7, 14, 21, 28, 35]

function secondFunc(number, length) {
    let result = []
    for (let i = 1; i <= length; i++) {
        result.push(number * i) 
    }
    return result
}

console.log(secondFunc(7, 5))

//ES6

function esSecondFunc(number, length) {
    return [...Array(length).keys()].map((e, i) =>(e+ 1) * number)
} 
console.log (esSecondFunc(7, 5))

// create a function that takes an array of numbers and a string, returns an array of number sorted in
// ascending or descending order.

//fsortFunc([4,3,2,1], "Ascending") -> [1, 2, 3, 4]
//fsortFunc([6,7,8,9], "Descending") -> [9, 8, 7, 6]

//Answer

function sortFunc(arr,str) {
    switch (str) {
        case 'Ascending':
            return arr.sort((a, b) => a - b)
            break;
        case 'Descending':
            return arr.sort((a, b) => b - a)
            break;
        default: return arr
    }
}

console.log(sortFunc([4,3,2,1], 'Ascending'))

//ES6
const esSortfunc = (arr, str) => 
str === 'Ascending' ? arr.sort((a, b) => a - b) :
    str === 'Descending' ? arr.sort((a, b) => b -a ) :
        arr

//create a function that returns true if all params are true otherwise return false

//trueOr?False(true, true, true) -> true

//ES6
const trueOrFalse = (...args) => args.every(Boolean)

//create a function that takes three arguments (x, y, z) and returns
//an array containing a n number of sub arrays
//each sub array contains item within

function subArrays(x, y, z) {
    return Array(x).fill(Array(y).fill(z))
}

console.log(subArrays(3,2,3))

//subArrays(3,2,3) -> [[3,3],[3,3],[3,3]]

//ES5

// function es5subArrays(x, y, z) {
//     let arr = Array ();

//     arr[0] = x

// }

//create a function that checks values from the array below.
//checkSubArrays([1,3], [1,2,3,4,5]) -> true 
//checkSubArrays([1,2,3], [6,7,8,9]) -> false

function check (a, b) {
    // loop first check values

    //if then else for true false statements
    //return
}

const arrCompare = (arr1, arr2) => {        // simple stuff must keep learning!!! Pay attention and do more coding!!
    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] === arr2[i])
        return 'True'
    } return 'False'
}

console.log(arrCompare([1,3], [1,2,3,4,5]))

