// do code stuff here and that MDN in your friend
//TODO not code es6 extreme short hand 
// write a function of two arguments and return and array. return the two arguments in an array

// function newArr(a, b) {   // normal function es5
//     let arrOne = [a, b]
//     return arrOne
// }
// console.log(newArr(1, 2))

// let newArr = (a, b) => [a, b] // es6 short hand with arrow function, An arrow function expression is a compact alternative to a traditional function expression,
                                    // but is limited and can't be used in all situations. research!
// console.log(typeof newArr)
// console.log(newArr(1, 2))

// let newArr = (...a) => a // spread syntax, allows an iterable such as an array expression or string to be expanded in places where zero or more arguments research more of this!
// console.log(typeof newArr)
// console.log(newArr(1, 2, 3, 4, 5, 6, 7, 8))

// let arrTwo = ["stuff" , 4, 5, 6, 7, 8]
// console.log(arrTwo[4], arrTwo[5])       // originally prints last array number but tweaking like this prints separate values

// arr = [2, 6]

// function oddOrEven (x) {  // function using .forEach  es6
//     let sum = 0;
//     x.forEach(num => sum += num) // num is a place holder
//     return sum%2 === 0 ? 'even' : 'odd'
// }
// console.log(oddOrEven([1, 2, 3, 4, 5, 6]))

function oddOrEven (x) {  // function using .forEach  long version es5
    let sum = 0;
    for (let i = 0; i < x.length; i++){
        sum += x[i]
    }
    if (sum%2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}
console.log(oddOrEven([1, 2, 3, 4, 5]))

// arr = ["9.4", "4.2"]

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

// [1, 2, 3, 4, 5, 6] = "123456"

// function arrayToString (arr) {  // using function to change array data type values from number to string
//     let text = ""
//     for (let i = 0; i < arr.length; i++) {
//         text += arr[i]
//     }
//     return text
// }
// let example = arrayToString([1, 2, 3, 4, 5, 6])

// console.log(example)
// console.log(typeof example) // checking type of datatype

// function arrayToString(arr) {
//     return arr.join('');   // tiny function of the above example
// }

//console.log(arrayToString([1, 2, 3, 4, 5, 6]))

// arrayToString = arr => arr.join('')  // even smaller es6 function of the above statement
// console.log(arrayToString([1, 2, 3, 4, 5, 6]))

// ('hello') = ('olleh')

// function gnirts (x) {  // reversing a string
//     let arr = x.split('') // split with put argument into an array split
//     let newArr = arr.reverse() // reverse the array
//     let joinNewArr = newArr.join('') // now join array as a string
//     return joinNewArr
// }

// console.log(gnirts('Ali'))


// const join =(x)=> ((x.split('')).reverse()).join('')
// console.log(join('hahahha'))