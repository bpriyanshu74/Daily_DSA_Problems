/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    let hashmap = new Map();
    let res = [];

    for (let i = 0; i < words.length; i++) {
        hashmap.set(words[i].split('').reverse().join(''), i);
    }

    function isPalindrome(str, left = 0, right = str.length - 1) {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let len = word.length;

        for (let j = 0; j <= len; j++) {
            let prefix = word.substring(0, j);
            let suffix = word.substring(j);

            if (isPalindrome(prefix)) {
                let suffixRevIdx = hashmap.get(suffix);
                if (suffixRevIdx !== undefined && suffixRevIdx !== i) {
                    res.push([suffixRevIdx, i]);
                }
            }

            // Avoid duplicates when j == len (empty suffix already checked in prefix)
            if (j !== len && isPalindrome(suffix)) {
                let prefixRevIdx = hashmap.get(prefix);
                if (prefixRevIdx !== undefined && prefixRevIdx !== i) {
                    res.push([i, prefixRevIdx]);
                }
            }
        }
    }

    return res;
    
};