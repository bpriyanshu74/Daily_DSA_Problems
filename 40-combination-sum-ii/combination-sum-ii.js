/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [], cur_combination = []
    candidates.sort((a,b) => a-b)

    function find_combination(target,index){
        if(target == 0){
            result.push([...cur_combination])
            return
        }

        for(let i=index; i<candidates.length; i++){
            if(i > index && candidates[i] == candidates[i-1]) continue
            if(candidates[i] <= target){
                cur_combination.push(candidates[i])
                find_combination(target-candidates[i], i+1)
                cur_combination.pop()
            }
        }
    }

    find_combination(target,0)
    return result
    
};