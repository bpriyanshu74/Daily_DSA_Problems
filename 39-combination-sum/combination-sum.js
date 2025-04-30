/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans = [], ds = [], index=0
    function helper(arr,ans,ds,target,index){
        if(target == 0){
            ans.push([...ds])
            return
        }

        for(let i=index; i<arr.length; i++){
            if(arr[i] <= target){
                ds.push(arr[i])
                helper(arr,ans,ds,target-arr[i],i)
                ds.pop()
            }  
            
        }
    }
    helper(candidates,ans,ds,target,index)
    return ans
    
};