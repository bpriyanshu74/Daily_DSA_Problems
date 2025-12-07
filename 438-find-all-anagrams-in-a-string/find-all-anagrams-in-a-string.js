/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let key = new Array(26).fill(0), ans = []
    for(let ch of p){
        let index = ch.charCodeAt(0) - 'a'.charCodeAt(0)

        key[index]++
    }

    let key_str = key.join('#')

    let k = p.length, l = 0

    let temp_key = new Array(26).fill(0)

    for(let r=0; r<s.length; r++){
        let index = s[r].charCodeAt(0) - 'a'.charCodeAt(0)
        temp_key[index]++
        if(r < k-1) continue

        let temp_key_str = temp_key.join('#')

        if(temp_key_str == key_str) ans.push(l)

        let lindex = s[l].charCodeAt(0) - 'a'.charCodeAt(0)
        temp_key[lindex]--
        l++
    }

    return ans

};