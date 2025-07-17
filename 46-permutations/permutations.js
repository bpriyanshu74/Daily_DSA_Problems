/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [], ds = [], freq = new Array(nums.length).fill(0)

    function dfs(ans,ds, freq){
        if(ds.length == nums.length){
            ans.push([...ds])
            return
        }

        for(let i=0; i< nums.length; i++){
            if(!freq[i]){
                freq[i] = 1
                ds.push(nums[i])
                dfs(ans,ds, freq)

                ds.pop()
                freq[i] = 0
            }
        }
        return ans

    }

    return dfs(ans, ds, freq)
    
};