/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {

    function safe(board,r,c){
        for(let i=0; i<n; i++){
            if(board[i][c] == 'Q') return false
        }
        for(let i=r-1,j=c-1; i>=0 && j >= 0 ; i--,j--){
            if(board[i][j] == 'Q') return false
        }
        for(let i=r-1, j = c+1; i>=0 && j < n; i--,j++){
            if(board[i][j] == 'Q') return false
        }
        return true
    }

    function dfs(row){
        if(row == n){
            count++
            return 
        }
        for(let col=0; col<n; col++){
            if(safe(board,row,col)){
                board[row][col] = 'Q'
                dfs(row+1)
                board[row][col] = '.'
            }
        }
    }

    let count = 0, board = new Array(n).fill().map(() => new Array(n).fill('.'))
    dfs(0)
    return count
    
};