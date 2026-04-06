/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Array(9).fill().map(() => new Set())
    let cols = new Array(9).fill().map(() => new Set())
    let boxes = new Array(9).fill().map(() => new Set())

    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            let val = board[i][j]

            if(val == '.') continue

            let boxindex = Math.floor(i/3) * 3 + Math.floor(j/3)

            if(
                rows[i].has(val) || cols[j].has(val) || boxes[boxindex].has(val)
            ){
                return false
            }

            rows[i].add(val)
            cols[j].add(val)
            boxes[boxindex].add(val)
        }
    }
    return true
};