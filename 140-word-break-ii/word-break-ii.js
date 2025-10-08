/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {

    function checkDic(str){
        for(let word of wordDict){
            if(word == str) return true
        }
        return false
    }

    function dfs(start, path){
        if(start == s.length){
            res.push(path.join(' '))
        }
        for(let end = start; end < s.length; end++){
            let w = s.slice(start, end+1)
            if(checkDic(w)){
                path.push(w)
                dfs(end+1, path)
                path.pop()
            }
        }
    }

    let res = []
    dfs(0, [])
    return res
    
};