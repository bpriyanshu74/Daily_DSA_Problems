/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {

    let board = new Array(n).fill(null).map(() => new Array(n).fill('.'))
    let result = []
    let row = board.length
    let col = board[0].length

    function nq(board, row, result){
        if(row == board.length){
            // adding the board in result
            addtoresult(board,result)
            return
        }
        for(let col = 0; col <board.length; col++){
            if(isSafe(board,row,col)){
            board[row][col] = "Q"
            nq(board, row+1, result)
            board[row][col] = "."
            }
        }
    }
    function addtoresult(board, result){
        let rows = board.length, cols = board.length
        let temp_result = []
        for(let r = 0; r<rows; r++){
            let rowstring = ""
            for(let c = 0; c<cols; c++){
            rowstring += board[r][c]
            }
            temp_result.push(rowstring)
        }
        result.push([...temp_result])
    }

    function isSafe(board,row,col){
        // vertically
        for(let r = row; r>=0; r--){
            if(board[r][col] == "Q") return false
        }
        // diagonally
        for(let r = row, c = col; r>=0 && c >= 0; r--,c--){
            if(board[r][c] == "Q") return false
        }
        // -ve diagonal
        for(let r = row, c = col; r>=0 && c < board.length; r--,c++){
            if(board[r][c] == "Q") return false
        }
        return true
    }

    nq(board,0, result)
    return result



    
};