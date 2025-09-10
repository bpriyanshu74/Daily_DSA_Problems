/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let n = arr.length, stack = [], MOD = 1e9 + 7
    let left = new Array(n).fill(0)
    let right = new Array(n).fill(0)
    ans = 0

    // creating previous less elements

    for(let i=0; i<n; i++){
        let count = 1
        while (stack.length && arr[i] < stack[stack.length-1][0]) {
            count += stack.pop()[1];
        }
        stack.push([arr[i], count]);
        left[i] = count
    }

    stack = []

    for(let i=n-1; i>= 0; i--){
        let count = 1
        while(stack.length && arr[i] <= stack[stack.length-1][0]){
            count += stack.pop()[1]
        }
        stack.push([arr[i], count])
        right[i] = count
    }

    let result = 0

    for(let i=0; i<n; i++){
        result += (arr[i]*left[i]*right[i]) % MOD
    }

    return result% MOD
    
};