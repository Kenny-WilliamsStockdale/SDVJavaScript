function greet () {  // basic function example, JavaScript won't execute or run this code until called. 
    return `Hi`
}

console.log('Whats up') // JavaScript will execute this line first

const name = 'Kenny'

const anotherName = 'Bob'

console.log(greet())  // Now javascript will call function and execute

let myString = 'abc' // declares variable with a string value of abc  Understanding memory concatenating Primitive example
myString = myString + 'd' // myString variable adds 'd' to string value
console.log(myString)

// NON-PRIMITIVE INFO
//Non-primitive (objects), the variable is saving a reference to the object. It does not create a new address or place to store data for a value. It is just a pointer to the object.
// However, if modifying a variable that is pointing to the address, it is actually modifying the data inside the address.

//GARBAGE COLLECTION INFO
//Garbage collection is a term used in computer programming to describe the process of finding and deleting objects which are no longer being referenced by other objects.
//In other words, garbage collection is the process of removing any objects which are not being used by any other objects.

// Call stack = primitive
//Heap = non-primitive

let sum = 0
sum = 1 + 2 + 3 + 4 + 5

const numbers = [] //array
numbers.push(1) //pushing numbers
numbers.push(2)
numbers.push(3)
numbers.push(4)
numbers.push(5)

console.log(numbers) //to interpret change is a change in memory address. Clarify memory or if change of value