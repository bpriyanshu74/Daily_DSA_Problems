/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let c1 = null, c2 = null

    let ct1 = 0, ct2 = 0

    for(let num of nums){
        if(c1 == num) ct1++
        else if(c2 == num) ct2++
        else if(ct1 == 0) {c1 = num
        ct1 = 1}

        else if(ct2 == 0) {c2 = num
        ct2 = 1}
        else{
            ct1--
            ct2--
        }
    }
    // verify the numbers
    ct1 = 0, ct2 = 0

    for(let num of nums){
        if(num == c1) ct1++
        else if(num == c2) ct2++
    }

    let res = []
    let n = nums.length

    if(ct1 > Math.floor(n/3)){
        res.push(c1)
    }
    if (ct2 > Math.floor(n / 3)) res.push(c2);

    return res
};