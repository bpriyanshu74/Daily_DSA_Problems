/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let board = new Array(n).fill().map(() => new Array(n).fill('.'))
    let rows = n, cols = n
    let res = []

    function isSafe(row,col){
        // checking vertical column
        for(let i=0; i<row; i++){
            if(board[i][col] == 'Q') return false
        }

        // checking left diagonal
        for(let i=row-1, j=col-1; i>= 0 && j >= 0; i--, j--){
            if(board[i][j] == 'Q') return false
        }
        //checking right diagonal
        for(let i=row-1, j=col+1; i >= 0 && j < cols; i--, j++){
            if(board[i][j] == 'Q') return false
        }
        return true
    }

    function dfs(row){
        if(row == n){
            let copy = board.map((r) => r.join(''))
            res.push(copy)
            return
        }
        for(let col = 0; col < n; col++){
            if(isSafe(row, col)){
                board[row][col] = 'Q'
                dfs(row+1)
                board[row][col] = '.'
            }
        }
    }
    dfs(0)
    return res
    
};