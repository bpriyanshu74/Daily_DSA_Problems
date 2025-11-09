/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a-b)
    s.sort((a,b) => a-b)

    let i = 0

    for(let ck of s){
        if(ck >= g[i]){
            i++
        }
    }
    return i
};