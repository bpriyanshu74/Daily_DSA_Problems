/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    if(s.length < k) return 0
    let vowels = ['a', 'e', 'i', 'o', 'u']

    let maxcount = 0
    let count = 0, l = 0
    for(let r=0; r<s.length; r++){
        if(vowels.includes(s[r])) count++
        if(r-l+1 == k){
            maxcount = Math.max(count, maxcount)

            if(vowels.includes(s[l])){
                count--
            }
            l++
        }
    }
    maxcount = Math.max(count, maxcount)

    return maxcount
};