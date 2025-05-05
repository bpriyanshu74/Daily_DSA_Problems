/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [], cur_candidates = [], k = target, index=0
    // candidates.sort((a,b) => a-b)

    function helper(arr,k, index){
        if(k==0){
            result.push([...cur_candidates])
            return
        }

        for(let i=index; i<arr.length; i++){
            // if(i > index && arr[i] == arr[i-1]) continue
            if(arr[i] <= k){
                cur_candidates.push(arr[i])
                helper(arr,k-arr[i],i)
                cur_candidates.pop()
            }
           
        }
    }
    helper(candidates, k, index)
    return result
    
};