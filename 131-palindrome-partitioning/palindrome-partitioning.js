/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    function check_pal(str){
        let l=0, r = str.length-1
        while(l < r){
            if(str[l] != str[r]) return false
            l++
            r--
        }
        return true
    }

    function dfs(start, path){
        if(start == s.length){
            res.push([...path])
            return
        }

        for(let end=start; end<s.length; end++){
            let substring = s.slice(start, end+1)
            if(check_pal(substring)){
                path.push(substring)
                dfs(end+1,path)
                path.pop()
            }
        }
    }

    let res = []
    dfs(0, [])
    return res
    
};