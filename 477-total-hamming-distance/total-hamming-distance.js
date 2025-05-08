/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    // function find_hamming(x,y){
    //     let xor = x ^ y 
    //     let count = 0
    //     while(xor > 0){
    //         count += xor & 1
    //         xor = xor >> 1
    //     }
    //     return count 
    // }

    // let ans = 0
    // for(let i=0; i<nums.length-1; i++){
    //     for(let j=i+1; j<nums.length; j++){
    //         ans += find_hamming(nums[i], nums[j])
    //     }
    // }
    // return ans

    let total = 0

    for(let i=0; i<32; i++){
        let count_ones = 0
        for(let k=0; k<nums.length; k++){
            if((nums[k]>>i) & 1) count_ones++
        }
        let count_zeroes = nums.length - count_ones
        total += count_ones * count_zeroes
    }
    return total
    
};