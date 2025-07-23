/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [], temp = []

    for(let i=1 ; i<= numRows; i++){
        if(i == 1) res.push([1])
        else if(i == 2) res.push([1,1])
        else{
            let lastentry = res[res.length-1]
            let prev = 0
            for(let j=0; j<lastentry.length; j++){
                let cur = lastentry[j]
                let sum = prev + cur
                temp.push(sum)
                prev = cur 
            }
            temp.push(1)
            res.push([...temp])
            temp = []
        }

    }
    return res
    
};