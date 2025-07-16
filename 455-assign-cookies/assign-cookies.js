/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let i = 0
    g.sort((a,b) => a-b)
    s.sort((a,b) => a-b)

    for(let k = 0; k<s.length; k++){
        if(s[k] >= g[i]){
            i++
        }
    }

    return i

    
    
};