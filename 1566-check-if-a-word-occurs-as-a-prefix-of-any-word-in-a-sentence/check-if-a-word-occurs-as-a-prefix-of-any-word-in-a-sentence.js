/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let s_arr = [], temp = ''
    for(let i=0;i <sentence.length; i++){
        if(sentence[i] == " "){
            s_arr.push(temp)
            temp = ''
            continue
        }
        temp += sentence[i]
    }
    s_arr.push(temp)
    
    for(let k=0; k<s_arr.length; k++){
        let word=s_arr[k], i=0
        while(word[i] == searchWord[i] && i<= word.length && i<= searchWord.length){
            i++
        }
        if(i >= searchWord.length){
            return k+1
        }
    }
    return -1
    
};