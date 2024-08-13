/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // using two pointer approach
    let low = 0;
    let high = numbers.length - 1
    while(low<=high){
        let twosum = numbers[low] + numbers[high]
        if( twosum == target){
            return [low+1,high+1]
        }
        else if(twosum < target){
            low += 1
        }
        else{
            high -= 1
        }
    }
    return [low+1,high+1]
};