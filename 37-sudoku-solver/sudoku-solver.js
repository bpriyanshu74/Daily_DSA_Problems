/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    helper(board)

    function helper(board){
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++){
                if(board[i][j] == "."){
                    for(let c = 1; c<=9; c++){
                        if(isValid(board,i,j,String(c))){
                            board[i][j] = String(c)

                            if(helper(board) == true){
                                return true
                            }
                            else{
                                board[i][j] = "."
                            }
                        }
                    }
                    return false
                }
                
            }
        }
        return true
    }

    function isValid(board,row,col,num){
        for(let i=0; i<9; i++){
            if(board[row][i] == num) return false

            if(board[i][col] == num) return false

            if(board[3 * Math.floor(row/3) + Math.floor(i/3)][3 * Math.floor(col/3) + i%3] == num) return false
        }
        return true
    }
    
    
};