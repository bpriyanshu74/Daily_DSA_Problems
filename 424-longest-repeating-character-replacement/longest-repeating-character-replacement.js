/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l = 0, map = {}, maxch = 0, longest = 0

    for (let r = 0; r < s.length; r++) {
        let ch = s[r]
        map[ch] = (map[ch] || 0) + 1

        maxch = Math.max(maxch, map[ch])

        while ((r - l + 1) - maxch > k) {
            map[s[l]]--
            l++
        }

        longest = Math.max(longest, r - l + 1)
    }

    return longest
};