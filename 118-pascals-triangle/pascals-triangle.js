/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows == 1) return [[1]]
    if(numRows == 2) return [[1], [1,1]]

    let ans = [[1], [1,1]]

    while(numRows - 2 > 0){
        let temp = [], top = ans[ans.length-1]
        for(let i=0; i<top.length-1; i++){
            temp.push(top[i] + top[i+1])
        }

        ans.push([1,...temp,1])
        numRows--
    }

    return ans
};