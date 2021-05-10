// create a function that takes two numbers and a mathematical operator = - / * and will perform a calculation with the given numbers.
//calFunc(3, "+", 4) -> 7

// Answer 

function calFunc(num1, operator, num2) {
    operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b 
    }
    return operations[operator](num1, num2)
}
console.log(calFunc(3, "+", 4))

// create a function that takes an array and returns the sum of all items in the array. The item in an array can be another array.
// sumFunc([1, [2, [1]], 3])
// 1 + 2 + 1 + 3 = 7

function sumFunc(arr) {
    return arr.flat(Infinity).reduce((a,b) => a+b)
}

console.log(sumFunc([1, [2, [1]], 3]))

// create a function that takes multidimensional array, converts into one dimensional array and returns it using recursion.
// flatten([[17.2, 5, "SDV503"]]) -> [17.2, 5, "SDV503"]

const flatten = (arr) => {
    const result = [];
    arr.forEach(element => {
        Array.isArray(element) ? result.push(...flatten(element)) : result.push(element)
    })
}

// console.log(flatten([[17.2, 5, "SDV503"], 13, ['Ali']]))

// Create a function that takes an object or array as an argument and returns the maximum depth of that object or array.
// getDepth({a: 1}) -> 1
// getDepth([1, [2, [3, [4, [5]]]]]) -> 5

const getDepth = obj => {
    let level = 1

    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            const depth = getDepth(obj[key]) + 1

            level = Math.max(depth, level)
        }
    })
    return level
}
console.log(getDepth([1, [2, [3, [4, [5]]]]]))

// create a function that can nest a flat array to represent an incremental depth level sequence.
// The elements do not matter to the function, you should increment by index.
// Expect the array length to be from 2-20.

//createDepth([1,2]) -> [1, [2]]
//createDepth([1, 2, 3]) -> [1, [2, [3]]]

function createDepth (arr) {
    if(arr.length === 1) return arr
    return [arr[0], createDepth(arr.slice(1))]
}

console.log (createDepth([1, 2, 3]))

const esSixDepth = arr => arr.length === 1 ? arr : [arr[0], createDepth(arr.slice(1))]
