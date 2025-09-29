/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let f1 = {}, n = s.length, m = words.length, k = words[0].length, total_len = m*k
    let res = []

    for(let ch of words){
        f1[ch] = (f1[ch] || 0) + 1
    }

    //  for every offset
    for(let i=0; i<= n-total_len; i++){
        let valid = true
        let f2 = {}
        for(let j=0; j<m; j++){
            let start = i+j*k
            let word = s.slice(start, start+k)

            if(!(word in f1)){
                valid = false
                break
            }
            f2[word] = (f2[word] || 0) + 1
            if(f2[word] > f1[word]){
                valid = false
                break
            }
        }
        if(valid){
            res.push(i)
        }
    }
    return res
};