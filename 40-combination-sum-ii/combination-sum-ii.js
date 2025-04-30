/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    function helper(index,ds,ans,arr,target){
        if(target == 0){
            ans.push([...ds])
            return
        }
        for(let i=index; i<arr.length; i++){
            if(i > index && arr[i] == arr[i-1]) continue
            if(arr[i] > target) break
            if(arr[i] <= target){
                ds.push(arr[i])
                helper(i+1, ds,ans,arr,target-arr[i])
                ds.pop()
            }
        }
    }

    let ans = [], ds = []
    candidates.sort((a,b) => a-b)
    helper(0,ds,ans,candidates, target)
    return ans
    
};