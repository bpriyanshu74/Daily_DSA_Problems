/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = [], ds = ''
    function dfs(ds, open, close){
        if(ds.length == 2*n){
            ans.push(ds)
            return
        }

        if(open > 0){
            dfs(ds+'(', open-1,close)
        }
        if(close > open){
            dfs(ds+')', open, close-1)
        }
    }

    dfs(ds, n, n)

    return ans
    
};