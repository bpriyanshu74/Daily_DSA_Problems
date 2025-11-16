/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows == 0) return []
    if(numRows == 1) return [[1]]

    let res = [[1]]

    for(let i=2; i<=numRows; i++){
        let prev = res[res.length-1]
        prev = [-Infinity, ...prev, -Infinity]
        let temp = []
        for(let i=1; i<prev.length; i++){
            let val = (prev[i] == -Infinity ? 0 : prev[i]) + (prev[i-1] == -Infinity ? 0 : prev[i-1])
            temp.push(val)
        }
        res.push(temp)
    }

    return res
};