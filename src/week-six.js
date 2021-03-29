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

let arr = [1, 2, 3, 4, 5]
console.log(arr.length)

const student = {  //object example
    name: "Bob",
    year: "one",
    class: "SDV503"
}

console.log(student.name)
student.name = "Matt"  // changing object name
console.log(student.name)

const newObj = {} 

const info = {      // another object
    firstName: 'John',
    lastName: 'Smith',
    dateOfBirth: '1st DEC 2000',
    friends: ['Bob', 'Tom'] 
}

console.log(info.friends[0]) //Getting friend array index value 0 and print

const example = {
    nestedObj: {
        name: 'Alex' //nested object example
    }
}
console.log(example)

const anotherObj = new Object() //
console.log(anotherObj)

const propsName ='firstName'

const objOne = {        // object with array
    [propsName.toUpperCase()]: 'Alex'
}

console.log(objOne)

const objTwo = {           //function and an object AKA a method example
    firstName: 'Alex',
    lastName: 'Ali',
    printFullName() { //Function here
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(objTwo.printFullName())
console.log(objTwo['firstName'])

console.log(objTwo.hasOwnProperty('lastName')) // confirming if object has lastName property in object 
console.log(objTwo.hasOwnProperty('address')) // confirming if object has address property in object 

console.log(delete objTwo.firstName) //deleting the first name property

console.log(objTwo.hasOwnProperty('firstName')) // checking if the property is there or not after delete command

const newProps = delete objTwo.firstName // creating a variable to delete it 
console.log(newProps)
