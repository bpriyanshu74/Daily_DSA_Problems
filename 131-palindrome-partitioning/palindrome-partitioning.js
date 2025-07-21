/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    function checkpal(str){
        if(str.length == 0 || str.length == 1) return true
        let l = 0, r = str.length-1
        while(l < r){
            if(str[l] != str[r]) return false
            l++
            r--
        }
        return true
    }
    let res = [], part = []

    function dfs(index){
        if(index == s.length){
            res.push([...part])
        }
        for(let i=index; i<s.length; i++){
            let substring = s.slice(index, i+1)
            if(checkpal(substring)){
                part.push(substring)
                dfs(i+1)
                part.pop()
            }
            
        }
    }

    dfs(0)
    return res
    
};