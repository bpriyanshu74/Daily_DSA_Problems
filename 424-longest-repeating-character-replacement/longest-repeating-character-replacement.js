/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let maxcount = 0, l = 0
    let freq = new Array(26).fill(0), maxfreq = -1

    for(let r = 0; r < s.length; r++){
        let index = s[r].charCodeAt(0) - 65
        freq[index]++
        maxfreq = Math.max(maxfreq, freq[index])

        let need = (r-l+1) - maxfreq

        if(need > k){
            let lindex = s[l].charCodeAt(0) - 65
            freq[lindex]--
            l++
        }else{
            maxcount = Math.max(maxcount, r-l+1)
        }
    }
    return maxcount
};