/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    function dfs(i,j, index){

        if(index == word.length) return true
        if(i < 0 || i >= m || j < 0 || j >= n || board[i][j] != word[index]){
            return false
        }
        let temp = board[i][j]
        board[i][j] = '#'
        let found = dfs(i+1, j, index+1)||
                    dfs(i, j+1, index+1)||
                    dfs(i-1, j, index+1)||
                    dfs(i, j-1, index+1)
        
        board[i][j] = temp
        return found
    }

    let m = board.length, n = board[0].length
    for(let i=0; i<m ; i++){
        for(let j=0; j<n; j++){
            
            if(dfs(i,j,0)) return true
            
        }
    }
    return false
    
};