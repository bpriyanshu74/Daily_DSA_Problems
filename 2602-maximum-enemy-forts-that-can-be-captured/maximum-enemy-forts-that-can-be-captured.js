/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {
    let last_fort_index = -1, maxm = 0

    for(let i=0; i<forts.length; i++){
        if(forts[i] !== 0){
            if(last_fort_index != -1 && forts[i] != forts[last_fort_index]){
                let between = i-last_fort_index-1
                maxm = Math.max(between,maxm)
            }
            last_fort_index = i
        }
    }
    return maxm

    
};