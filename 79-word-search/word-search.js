/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    function dfs(s,e, index){
        if(index == word.length) return true
        
        if( s < 0 || s >= board.length || e < 0 || e >= board[0].length || board[s][e] != word[index]) return false
        
        let temp = board[s][e]

        board[s][e] = '#'

        let found = dfs(s+1, e, index+1) ||
                    dfs(s-1, e, index+1) ||
                    dfs(s, e+1, index+1) ||
                    dfs(s, e-1, index+1)

        board[s][e] = temp

        return found
    }
    
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[0].length; j++){
            if(board[i][j] == word[0]){
                if(dfs(i,j, 0)) return true
            }
        }
    }

    return false
    
};