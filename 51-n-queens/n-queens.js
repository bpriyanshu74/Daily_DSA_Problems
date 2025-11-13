/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let board = Array.from({length: n}, () => Array(n).fill('.'))
    let ans = []

    function dfs(board, row){
        if(row == n){
            ans.push(board.map((r) => r.join('')))
            return
        }

        for(let i=0; i<n; i++){
            if(isSafe(row,i)){
                board[row][i] = 'Q'
                dfs(board, row+1)
                board[row][i] = '.'
            }
        }
    }

    function isSafe(x,y){
        // checking the same column

        for(let i=x-1; i>= 0; i--){
            if(board[i][y] == 'Q') return false
        }

        //checking positive diagonal

        for(let i=x-1, j=y-1; i>=0 && j >= 0; i--,j--){
            if(board[i][j] == 'Q') return false
        }

        //checking negative diagonal

        for(let i=x-1, j = y+1; i>= 0 && j < n; i--,j++){
            if(board[i][j] == 'Q') return false
        }
        return true
    }

    dfs(board, 0)
    return ans
    
};