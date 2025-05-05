/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {

    let board = new Array(n).fill(null).map(() => new Array(n).fill("."))
    let result = []

    function nqueens(board,row){
        if(row == n){
            saveBoard(board)
            return
        }

        for(let col=0; col<n; col++){
            if(isSafe(board, row, col)){
                board[row][col] = "Q"
                nqueens(board,row+1)
                board[row][col] = "."
            }
        }
    }
    function isSafe(board,row,col){
        // check vertically
        for(let r=row; r>=0; r--){
            if(board[r][col] == "Q") return false
        }
        // check positive diagonal
        for(let r=row,c=col; r >=0 && c >=0 ; r--,c--){
            if(board[r][c] == "Q") return false
        }
        // check negative diagonal
        for(let r=row,c=col; r >=0 && c < n ; r--,c++){
            if(board[r][c] == "Q") return false
        }
        return true
    }

    function saveBoard(board){
        let cur_combination = []
        for(let i=0; i<n; i++){
            let tempstring = ""
            for(let j=0; j< n; j++){
                tempstring += board[i][j]
            }
            cur_combination.push(tempstring)
        }
        result.push([...cur_combination])
    }

    nqueens(board,0)
    return result
    
};