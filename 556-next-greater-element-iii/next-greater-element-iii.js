/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    let digits = n.toString().split('').map(digit => Number(digit))
    let pivot = -1
    let m = digits.length

    for(let i=m-2; i>=0; i--){
        if(digits[i] < digits[i+1]){
            pivot = i
            break
        }
    }

    if(pivot == -1) return -1

    for(let i = m-1; i> pivot; i--){
        if(digits[i] > digits[pivot]){
            [digits[i], digits[pivot]] = [digits[pivot], digits[i]]
            break
        }
    }

    let left = pivot+1, right = m-1

    while(left < right){
        [digits[left], digits[right]] = [digits[right], digits[left]]
        left++
        right--
    }

    let ans = digits.join('')

    return ans > 2**31-1 ? -1 : Number(ans)
    
};