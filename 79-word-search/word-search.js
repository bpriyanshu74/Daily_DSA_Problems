/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    function dfs(x,y,index){
        if(index == word.length) return true
        if(x < 0 || x >= board.length || y < 0 || y >= board[0].length || board[x][y] != word[index]){
            return
        }

        let temp = board[x][y]
        board[x][y] = '#'

        let found = (dfs(x+1,y,index+1) || 
                        dfs(x-1, y, index+1) ||
                        dfs(x, y+1, index+1) ||
                        dfs(x, y-1, index+1))
        board[x][y] = temp
        return found
    }

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(dfs(i,j,0)) return true
        }
    }
    return false
};