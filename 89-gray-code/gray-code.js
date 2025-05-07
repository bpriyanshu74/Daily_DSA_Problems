/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {

    function helper(n){
        if(n==0) return [0]
        let prevgray = helper(n-1)

        let result= [...prevgray]

        let addonbit = 1 << (n-1)

        for(let i=prevgray.length-1; i>=0; i--){
            result.push(prevgray[i] | addonbit)
        }
        return result
    }

    return helper(n)
    
    
};