/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits == "") return []
    let mapping = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

    function helper(digits, ans, cur, index){
        if(index == digits.length){
            ans.push(cur.join(""))
            return
        }

        let number = digits[index] - "0"
        let values = mapping[number]

        for(let char = 0; char < values.length; char++){
            cur.push(values[char])
            helper(digits,ans, cur, index+1)
            cur.pop()
        }
    }

    let ans = [], cur = [], index=0
    helper(digits,ans,cur,index)
    return ans

    

    
};