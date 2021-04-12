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
        return i
    } 
}
// if (arr%2 === 0) {
//             return 'even'
//         } else {
//             return 'odd'
//         }
}
console.log(odd(5))