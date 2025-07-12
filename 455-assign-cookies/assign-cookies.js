/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a-b)
    s.sort((a,b) => a-b)

    // left tracks the children, right tracks the cookies

    let r = 0, l = 0
    while(r < s.length){
        if(s[r] >= g[l]){
            l++
            r++
        }
        else{
            r++
        }
    }

    return l


};