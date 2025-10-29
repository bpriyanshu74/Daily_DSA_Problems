/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let words = new Set(wordList)
    if(!words.has(endWord)) return 0
    let q = [[beginWord, 1]]

    while(q.length){
        let [word, level] = q.shift()
        let word_arr = Array.from(word)

        for(let i=0; i<word_arr.length; i++){
            let org_ch = word_arr[i]
            for(let k=97; k<123; k++){
                word_arr[i] = String.fromCharCode(k)
                let newword = word_arr.join('')
                
                if(words.has(newword)){
                    if(newword == endWord) return level+1
                    q.push([newword, level+1])
                    words.delete(newword)
                }
            }
            word_arr[i] = org_ch
        }
    }
    return 0
};