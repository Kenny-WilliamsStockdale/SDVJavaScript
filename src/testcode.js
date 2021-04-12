// function odd (x) {  // function using .forEach  long version es5
//     let sum = 0;
//     for (let i = 0; i < x.length; i++){
//         sum += x[i]
//     }
//     if (sum%2 === 0) {
//         return 'even'
//     } else {
//         return 'odd'
//     }
// }
// console.log(oddOrEven([1, 2, 3, 4, 5]))

function odd (x) {
    let arr = []
    for (let i = 0; i <= x; i++){
        // console.log(i)
    if( i%2 !== 0) {
        arr.push(i)
    } 
    
}
    // return arr.reduce((a,b)=>a+b)
    let result = 0
    // for (let a=0; a < arr.length; a++) {
    //     result += arr[a]
    // }
    arr.forEach(element => {
        result += element
    });
    return result
}
console.log(odd(13))

