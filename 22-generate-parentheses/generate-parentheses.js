/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let open = n, close = n

    let res = [], temp = ''

    function dfs(temp, open, close){
        if(temp.length == 2*n){
            res.push(temp)
        }
        if(open > 0){
            dfs(temp + '(', open-1, close)
        }
        if(close > open){
            dfs(temp + ')', open, close-1)
        }
    }

    dfs(temp, open, close)
    return res
    
};