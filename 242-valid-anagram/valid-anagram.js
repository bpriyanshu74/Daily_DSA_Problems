/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let char_s = s.split("").sort().join("")

    let char_t = t.split("").sort().join("")

    return char_s == char_t
    
};