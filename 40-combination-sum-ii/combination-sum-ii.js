/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    function comb_sum(arr,index,ds,result, target){
        if(target == 0){
            result.push([...ds])
            return
        }

        for(let i=index; i<arr.length; i++){
            if(i>index && arr[i] == arr[i-1]) continue
            if(arr[i] > target) break

            ds.push(arr[i])
            comb_sum(arr,i+1, ds, result, target-arr[i])
            ds.pop()
        }
    }

    let ds = [], result = []
    candidates.sort((a,b) => a-b)
    comb_sum(candidates, 0,ds, result, target)
    return result
    
};