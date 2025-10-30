/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    // fm, hm
    let fm = {}, hm = {}

    for(let num of nums){
        fm[num] = (fm[num] || 0) + 1
    }

    for(let x of nums){
        if(fm[x] == 0) continue

        if((hm[x-1] || 0) > 0){
            hm[x-1] = hm[x-1] - 1
            hm[x] = (hm[x] || 0) + 1
        }else if((fm[x+1] || 0) > 0  && (fm[x+2]||0) > 0){
            fm[x+1] -= 1
            fm[x+2] -= 1
            hm[x+2] = (hm[x+2] || 0) + 1
        }else{
            return false
        }
        fm[x] -= 1
    }
    return true
    
};