/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    if(s.length <= 10) return []

    let freq = {}
    let ans = new Set()

    let key = s.slice(0,10)

    freq[key] = 1

    for(let i=10; i<s.length; i++){
        key = key.slice(1) + s[i]

        freq[key] = (freq[key] || 0) + 1

        if(freq[key] > 1) ans.add(key)

    }

    return Array.from(ans)
};