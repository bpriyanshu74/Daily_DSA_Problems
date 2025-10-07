/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]]

    for(let num of nums){
        let newsubset = []
        for(let subset of res){
            newsubset.push([...subset, num])
        }
        res.push(...newsubset)
    }
    return res
};