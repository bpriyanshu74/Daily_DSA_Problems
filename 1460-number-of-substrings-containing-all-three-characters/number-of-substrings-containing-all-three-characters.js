/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    // lets start with brute force
    // let count = 0
    // for(let i=0; i<s.length; i++){
    //     let set = new Set()
    //     for(let j=i; j<s.length; j++){
    //         set.add(s[j])
    //         if(set.size == 3) count++
    //     }
    // }
    // return count

    // now to optimise this we can use sliding window
    let count = 0, l = 0, freq = new Map(), n = s.length

    for(let r=0; r<s.length; r++){
        freq.set(s[r], (freq.get(s[r]) || 0) + 1)
        while(freq.size == 3){
            count += n - r
            freq.set(s[l], freq.get(s[l]) - 1)
            if(freq.get(s[l]) == 0) freq.delete(s[l])
            l++
        }
    }
    return count
};