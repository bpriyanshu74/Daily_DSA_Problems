/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let res = []

    let l = 0, r = numbers.length-1

    while(l < r){
        let sum = numbers[l] + numbers[r]
        if(sum == target){
            res.push(l+1)
            res.push(r+1)
            break
        }else if(sum > target){
            r--
        }else{
            l++
        }
    }
    return res
};