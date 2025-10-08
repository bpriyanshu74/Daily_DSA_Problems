/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {

    function valid_check(board, r, c, ch){
        for(let i=0; i<9; i++){
            if(board[r][i] == ch) return false
            if(board[i][c] == ch) return false

            let boxrow = 3*Math.floor(r/3) + Math.floor(i/3)
            let boxcol = 3*Math.floor(c/3) + (i%3)
            if(board[boxrow][boxcol] == ch) return false
        }
        return true
    }

    function dfs(){
        for(let r = 0; r < 9; r++){
            for(let c = 0; c < 9; c++){
                if(board[r][c] == '.'){
                    for(let k=1; k <= 9; k++){
                        ch = k.toString()
                        if(valid_check(board, r, c, ch)){
                            board[r][c] = ch
                            if(dfs()) return true
                            board[r][c] = '.'
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