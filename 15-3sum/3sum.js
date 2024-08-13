/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let n = nums.length
    let res = []
    nums.sort((a,b) => a-b)
    for(let i=0; i<n-2; i++){
        if(i>0 && nums[i] == nums[i-1]) continue;

        let cur = nums[i]
        let target = -cur

        let low=i+1,high=n-1

        

        while(low<high){
            let cursum = nums[low] + nums[high]
            if(cursum == target){
                res.push([nums[i], nums[low], nums[high]])

                while(low<high && nums[low] == nums[low+1]) low++;

                while(low<high && nums[high] == nums[high-1]) high--;

                low++;
                high--;
            }
            else if(cursum > target){
                high--;
            }
            else{
                low++;
            }
            
        }
    }
    return Array.from(res)
};