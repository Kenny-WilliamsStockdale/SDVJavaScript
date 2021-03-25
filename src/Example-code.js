let board = []
let row = []
let random = (a) => Math.floor(Math.random() * Math.floor(a)) // function to generate random number
//ANCHOR create a random board of 4x4 with 0 
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        row.push(0)
    }
    board.push(row)
    row = []
}
//generate bomb
function bombGenerator(para = 5) {
    let newBoard = [...board]
        //adding para number of bomb to the board with row and column. The default is 5
    for (let i = 0; i < para; i++) {
        let row = random(4)
        let column = random(4)
        newBoard[row][column] = 1
    }
    // return newBoard
    return newBoard
}
console.log(bombGenerator())