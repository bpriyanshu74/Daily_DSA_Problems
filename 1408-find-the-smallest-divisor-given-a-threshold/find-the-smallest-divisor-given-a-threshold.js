/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    // let minm = 1
    // let maxm = Math.max(...nums)

    // let ans = maxm
    // for(let i=minm; i<= maxm; i++){
    //     let div_sum = 0
    //     for(let j=0; j< nums.length; j++){
    //         div_sum += Math.ceil(nums[j] / i)
    //     }
    //     if(div_sum <= threshold){
    //         ans = Math.min(ans, i)
    //     }
    // }
    // return ans
    function checkPossible(arr, n, th){
        let div_sum = 0
        for(let i=0; i< arr.length; i++){
            div_sum += Math.ceil(arr[i]/n)
        }
        return div_sum <= th
    }

    let l = 1, r = Math.max(...nums), ans = r
    while( l<=r){
        let mid = l + Math.floor((r-l)/2)
        if(checkPossible(nums, mid, threshold)){
            ans = Math.min(ans, mid)
            r = mid - 1
        }
        else{
            l = mid + 1
        }
    }
    return ans
    
};