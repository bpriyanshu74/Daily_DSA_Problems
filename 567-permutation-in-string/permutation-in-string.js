/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let m = s1.length, n = s2.length

    if(m > n) return false

    let freq1 = {}

    for(let ch of s1){
        freq1[ch] = (freq1[ch] || 0) + 1
    }

    for(let i=0; i<= n-m; i++){
        let freq2 = {}
        for(let j=i; j<i+m; j++){
            freq2[s2[j]] = (freq2[s2[j]] || 0) + 1
        }

        let match = true
        
        for(let key in freq1){
            if(freq1[key] != freq2[key]){
                match = false
                break
            }
        }

        if(match) return true
    }
    return false
    
};