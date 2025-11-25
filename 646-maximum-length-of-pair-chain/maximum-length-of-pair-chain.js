/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    if(pairs.length == 1) return 1

    pairs.sort((a,b) => a[1] - b[1])
    let maxcount = 1

    for(let i=0; i<pairs.length-1; i++){
        let count = 1, s = pairs[i][0], e = pairs[i][1]
        for(let j=i+1; j<pairs.length; j++){
            if(pairs[j][0] > e){
                count++
                e = Math.max(e, pairs[j][1])
            }
        }
        maxcount = Math.max(count, maxcount)
    }
    return maxcount

    

};