/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {

    function dfs(x,y){
        for(let [dx,dy] of dir){
            let nx = x+dx, ny = y+dy
            if(nx >= 0 && nx < rows && ny >= 0 && ny < cols && board[nx][ny] == 'O'){
                board[nx][ny] = '#'
                dfs(nx,ny)
            }
        }
    }

    let dir = [[0,1], [1,0], [-1,0], [0,-1]]

    let rows = board.length, cols = board[0].length

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(i==0 || j == 0 || i == rows-1 || j == cols-1){
                if(board[i][j] == 'O'){
                    board[i][j] = '#'
                    dfs(i,j)
                }
            }
        }
    }

    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            if(board[i][j] == '#') board[i][j] = 'O'
            else{
                board[i][j] = 'X'
            }
        }
    }
};