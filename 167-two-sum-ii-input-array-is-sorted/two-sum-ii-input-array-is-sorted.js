/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l=0, r = numbers.length-1

    while(l < r){
        let twosum = numbers[l] + numbers[r]

        if(twosum == target) return [l+1,r+1]
        else if(twosum > target) r--
        else l++
    }

    return [-1,-1]
    
};