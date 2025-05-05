/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let fact = 1, nums = []
    for(let i=1; i<n ;i++){
        fact *= i
        nums.push(i)
    }
    nums.push(n)
    
    // at this point we have all the numbers and possible combinations as fact
    let ans = ""
    k--

    while(true){
        let number = nums[Math.floor(k/fact)]
        ans += String(number)

        // removing the number used
        nums.splice(Math.floor(k/fact), 1)

        if(nums.length == 0) break

        k = k % fact 
        fact = fact / nums.length

    }
    return ans
    
};