/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let numset = new Set(nums)
  let numsarr = Array.from(numset)
    let maxl = 0
  for(let num of numsarr){
    if(numset.has(num-1)) continue

    let len = 1
    while(numset.has(num+1)){
        len++
        num += 1
    }

    maxl = Math.max(len, maxl)
  }  

  return maxl
};