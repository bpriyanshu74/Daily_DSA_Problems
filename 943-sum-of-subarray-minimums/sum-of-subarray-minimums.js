/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let s1 = [], s2 = [], n = arr.length
    let ple = new Array(n).fill(-1)
    let nle = new Array(n).fill(n)

    // creating ple

    for(let i=0; i<n; i++){
        while(s1.length && arr[s1[s1.length-1]] >= arr[i]){
            s1.pop()
        }
        ple[i] = s1.length ? s1[s1.length-1] : -1
        s1.push(i)
    }

    // creating nle

    for(let i=0; i<n; i++){
        while(s2.length && arr[s2[s2.length-1]] >= arr[i]){
            let idx = s2.pop()
            nle[idx] = i
        }
        s2.push(i)
    }
    // finding ans
    let res = 0, mod = (10**9)+7

    for(let i=0; i<n; i++){
        let left =  i - ple[i]
        let right = nle[i] - i

        res = (res + arr[i] * left * right) % mod
    }

    return res
};