/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [], ds = []

    function comb_sum(arr,index,target, ds,result){
        if(index == arr.length){
            if(target == 0){
                result.push([...ds])
            }
            return
        }
        // take condition
        if(arr[index] <= target){
            ds.push(arr[index])
            comb_sum(arr,index, target-arr[index], ds, result)
            ds.pop()
        }
        // not take condition
        comb_sum(arr,index+1, target, ds,result)
    }

    comb_sum(candidates, 0, target, ds, result)

    return result
    
};