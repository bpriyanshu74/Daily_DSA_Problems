/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // let l=0, r = s.length-1
    // while(l <= r){
    //     [s[l], s[r]] = [s[r], s[l]]
    //     l++
    //     r--
    // }
    // return s

    function dfs(st,e){
        if(st > e) return
        [s[st], s[e]] = [s[e], s[st]]
        dfs(st+1, e-1)
    }

    dfs(0, s.length-1)

    return s
    
};