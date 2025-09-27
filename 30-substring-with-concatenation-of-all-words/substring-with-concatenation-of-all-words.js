/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let n = s.length, m = words.length, k = words[0].length
let wlen = m * k
let ans = []

// setting up frequency of word in words
let f1 = {}
for (let ch of words) {
    f1[ch] = (f1[ch] || 0) + 1
}

function check(a, b) {
    for (let key in a) {
        if (a[key] !== b[key]) return false
    }
    return true
}

// iterating over the string s 
for (let i = 0; i <= n - wlen; i++) {
    let f2 = {}, temp = ''
    for (let j = i; j < i + wlen; j++) {
        temp += s[j]
        if ((j - i + 1) % k === 0) {
            f2[temp] = (f2[temp] || 0) + 1
            temp = ''
        }
    }
    if (check(f1, f2)) {
        ans.push(i)
    }
}
    return ans
};