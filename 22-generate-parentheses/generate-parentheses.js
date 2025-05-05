/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    cur = "", result = []

    function helper(cur,open,close){
        if(cur.length == 2*n){
            result.push(cur)
            return
        }
        
        if(open > 0){
            helper(cur + "(", open-1, close)
        }
        if(close > open){
            helper(cur + ")", open, close-1)
        }
    }

    helper(cur,n,n)
    return result

    
};