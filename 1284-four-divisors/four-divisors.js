/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let total = 0;

for (let i = 0; i < nums.length; i++) {
    let count = 0, tempsum = 0;
    let num = nums[i];

    for (let div = 1; div * div <= num; div++) {
        if (num % div === 0) {
            let pair = num / div;
            
            // Add both divisors unless they're the same (perfect square case)
            if (div !== pair) {
                count += 2;
                tempsum += div + pair;
            } else {
                count++;
                tempsum += div;
            }

            if (count > 4) break; // Stop early if more than 4 divisors are found
        }
    }

    if (count === 4) total += tempsum;
}

return total;
    
};