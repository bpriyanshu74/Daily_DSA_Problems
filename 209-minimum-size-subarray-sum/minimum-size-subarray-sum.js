/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let prefix = [0]

  for(let i=0; i<nums.length; i++){
    prefix.push(nums[i] + prefix[prefix.length-1])
  }

  let minlen = Infinity

  for(let i=0; i<prefix.length; i++){
    let targetsum = target + prefix[i]

    let l=0, r= prefix.length-1, j=-1

    while(l <= r){
        let m = Math.floor((r+l)/2)

        if(prefix[m] >= targetsum){
            j = m
            r = m-1
        }else{
            l = m+1
        }
    }
    if (j!= -1) minlen = Math.min(minlen, j-i)
  }

  return minlen == Infinity ? 0 : minlen
};