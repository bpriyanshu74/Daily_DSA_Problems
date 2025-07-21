/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

    function isSafe(board, row, col, number){
        // checking row
        for(let i=0; i<9; i++){
            if(board[row][i] == number) return false
            if(board[i][col] == number) return false
            let boxRow = 3 * Math.floor(row/3) + Math.floor(i/3)
            let boxCol = 3 * Math.floor(col/3) + (i%3)
            if(board[boxRow][boxCol] == number) return false

        }
        return true
        
    }

    function dfs(){
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++){
                if(board[i][j] == '.'){
                    for(let k = 1; k<= 9; k++){
                        let ch = k.toString()
                        if(isSafe(board,i,j, ch)){
                            board[i][j] = ch
                            if(dfs()) return true
                            board[i][j] = '.'
                        }
                    }
                    return false
                }
            }
        }
        return true
    }
    dfs()
 
    
};