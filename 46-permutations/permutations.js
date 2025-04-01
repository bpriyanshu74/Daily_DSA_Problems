/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    function helper(ds,ans,freq,arr){
        if(ds.length == arr.length){
            ans.push([...ds])
            return
        }
        for(let i=0; i< nums.length; i++){
            if(!freq[i]){
                freq[i] = 1
                ds.push(nums[i])
                helper(ds,ans,freq,arr)
                ds.pop()
                freq[i] = 0
            }
        }

        return ans

    }

    let ds = [], ans = [], freq = new Array(nums.length).fill(0)
    return helper(ds,ans,freq,nums)
    
};