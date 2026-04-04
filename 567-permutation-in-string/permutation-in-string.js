/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s2.length < s1.length) return false
    let freq1 = new Array(26).fill(0), freq2 = new Array(26).fill(0)

    for(let i=0; i<s1.length; i++){
        let index1 = s1[i].charCodeAt(0) - 'a'.charCodeAt(0)
        let index2 = s2[i].charCodeAt(0) - 'a'.charCodeAt(0)
        freq1[index1]++
        freq2[index2]++
    }
    if(freq1.toString() == freq2.toString()) return true
    let l = 0

    for(let r = s1.length; r<s2.length; r++){
        let indexr = s2[r].charCodeAt(0) - 'a'.charCodeAt(0)
        let indexl = s2[l++].charCodeAt(0) - 'a'.charCodeAt(0)

        freq2[indexr]++
        freq2[indexl]--

        if(freq1.toString() == freq2.toString()) return true

    }

    return false

};