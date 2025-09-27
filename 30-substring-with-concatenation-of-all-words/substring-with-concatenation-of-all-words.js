/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let n = s.length, m = words.length, wordlen = words[0].length, ans = []

    let f1 = {}
    for(let ch of words){
        f1[ch] = (f1[ch] || 0) + 1
    }

    // trying all offsets
    for(let offset = 0; offset < wordlen; offset++){

        let l = offset, f2 = {}, count = 0

        for(let right = offset; right+wordlen <= s.length; right += wordlen){
            let curword = s.slice(right, right+wordlen)

            if(f1[curword]){
                f2[curword] = (f2[curword] || 0) + 1
                count++

                while(f2[curword] > f1[curword]){
                    let leftword = s.slice(l, l+wordlen)
                    f2[leftword]--
                    count--
                    l += wordlen
                }

                if(count == m){
                    ans.push(l)
                }
            }else{
                f2 = {}
                count = 0
                l = right+wordlen
            }
        }
    }
    return ans
};