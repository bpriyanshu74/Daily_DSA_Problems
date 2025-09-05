/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows == 1) return [[1]]
    if(numRows == 2) return [[1],[1,1]]

    let ans = [[1],[1,1]], i=2

    while(i < numRows){
        let lastrow = ans[ans.length-1]
        let newrow = [1]
        for(let i=1; i<lastrow.length; i++){
            let val = lastrow[i] + lastrow[i-1]
            newrow.push(val)
        }
        newrow.push(1)
        ans.push(newrow)
        i++
    }

    return ans

    
};