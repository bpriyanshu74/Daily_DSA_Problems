/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

    function calculatemax(arr){
        let maxm = 0
        for(let i=0; i<arr.length; i++){
            maxm = Math.max(maxm, arr[i])
        }
        return maxm
    }
    let maxl = 0,l=0,r=0, freq_arr = new Array(26).fill(0), maxf = 0
    while(r < s.length){
        let characterIndex = s.charCodeAt(r) - 'A'.charCodeAt(0)
        freq_arr[characterIndex]++ 
        maxf = Math.max(maxf, freq_arr[characterIndex])
        let changes = (r-l+1) - maxf

        if(changes > k){
            let leftcharindex = s.charCodeAt(l) - 'A'.charCodeAt(0)
            freq_arr[leftcharindex]--
            maxf = calculatemax(freq_arr)
            l++
        }
        if(changes <= k){
            maxl = Math.max(r-l+1, maxl)
        }
        r++
    }
    return maxl  
    
};