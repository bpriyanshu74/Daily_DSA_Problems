/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans = [[1]]
    if(numRows == 1) return ans
    for(let i=1; i<numRows; i++){
        let lastrow = ans[ans.length-1]
        let temp = [0, ...lastrow, 0]
        let newrow = []
        for(let j=1; j<temp.length; j++){
            newrow.push(temp[j] + temp[j-1])
        }

        ans.push(newrow)
    }

    return ans
    
};