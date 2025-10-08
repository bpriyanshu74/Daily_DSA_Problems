/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = [], board = new Array(n).fill().map(() => new Array(n).fill('.'))

    function safe(board, r , c){
        for (let i = 0; i < n; i++) {
        if (board[i][c] == 'Q') return false;
    }

    // upper left diagonal
    for (let i = r - 1, j = c - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 'Q') return false;
    }

    // upper right diagonal
    for (let i = r - 1, j = c + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] == 'Q') return false;
    }

    return true;
    }
    
    function dfs(row){
        if(row == n){
            res.push(board.map(r => r.join('')));
            return
        }
        for(let col = 0; col < n; col++){
            if(safe(board, row, col)){
                board[row][col] = 'Q'
                dfs(row+1)
                board[row][col] = '.'
            }
        }
    }
    dfs(0)
    return res
};