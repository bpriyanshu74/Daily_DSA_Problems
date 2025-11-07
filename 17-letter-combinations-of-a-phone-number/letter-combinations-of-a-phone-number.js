/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'], ans = []

    function dfs(index, path){
        if(index == digits.length){
            ans.push(path.join(''))
            return
        }

        let digit = digits[index]
        let values = map[Number(digit)]

        for(let ch of values){
            path.push(ch)
            dfs(index+1, path)
            path.pop()
        }
    }

    dfs(0, [])
    return ans
};