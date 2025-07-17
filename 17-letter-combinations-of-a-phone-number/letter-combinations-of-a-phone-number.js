/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length == 0) return []

    let ans = [], ds = [], index = 0
    let map = ['','', 'abc', 'def','ghi','jkl','mno','pqrs','tuv','wxyz']

    function dfs(ans,ds, index){
        if(index == digits.length){
            ans.push(ds.join(''))
            return
        }

        let number = digits[index] - "0"
        let values = map[number]

        for(let i=0; i<values.length; i++){
            ds.push(values[i])
            dfs(ans, ds, index+1)
            ds.pop()
        }
    }
    dfs(ans, ds, index)

    return ans
    

    
};