/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    // we need to start from border where 0 are present
    let m = board.length, n = board[0].length
    let dir = [[1,0], [0,1], [-1,0], [0,-1]]

    for(let i=0; i<m; i++){
        for(let j=0; j< n; j++){
            if(i==0 || j == 0 || i == m-1 || j == n-1){
                if(board[i][j] == 'O'){
                    board[i][j] = '#'
                    dfs(i,j)
                }
            }
        }
    }
    
    function dfs(i,j){
        for(let [di,dj] of dir){
            let ni = i+di, nj = j+dj
            if(ni >= 0 && ni < m && nj >= 0 && nj < n && board[ni][nj] == 'O'){
                board[ni][nj] = '#'
                dfs(ni,nj)
            }
        }
    }

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(board[i][j] == 'O') board[i][j] = 'X'
            if(board[i][j] == '#') board[i][j] = 'O'
            
        }
    }
};