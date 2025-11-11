/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <= 1) return nums
    let mid = Math.floor(nums.length/2)
    let left = sortArray(nums.slice(0,mid))
    let right = sortArray(nums.slice(mid))

    return merge(left, right)

    function merge(left, right){
        let i=0, j = 0, res = []

        while(i < left.length && j < right.length){
            if(left[i] <= right[j]) res.push(left[i++])
            else{
                res.push(right[j++])
            }
        }

        while(i < left.length){
            res.push(left[i++])
        }
        while(j < right.length){
            res.push(right[j++])
        }
        return res
    }
    
};