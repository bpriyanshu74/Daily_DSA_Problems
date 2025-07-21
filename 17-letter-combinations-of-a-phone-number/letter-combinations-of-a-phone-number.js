/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length < 1) return []
    let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'], res = []

    function dfs(index, path){
        if(index == digits.length){
            res.push(path.join(''))
            return
        }
        let digit = digits[index]
        let values = map[Number(digit)]

        

        for(let char of values){
            path.push(char)
            dfs(index+1, path)
            path.pop()
        }
    }
        

    dfs(0, [])

    return res

    
};