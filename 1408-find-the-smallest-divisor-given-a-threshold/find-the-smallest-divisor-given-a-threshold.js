/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    function check(n, nums, th){
        let div_sum = 0
        for(let i=0; i< nums.length; i++){
            div_sum += Math.ceil(nums[i]/n)
            if(div_sum > th) break
        }
        return div_sum <= th
        
    }

    let l = 1, r = Math.max(...nums), ans = Math.max(...nums)
    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        if(check(mid, nums, threshold)){
            ans = Math.min(ans, mid)
            r = mid - 1
        }
        else{
            l = mid + 1
        }
    }
    return ans
    
};