/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    if(c == 1 || c == 0) return true
    let i = 1;
    while(i < c){
        if(i*i > c) break
        i++
    }
    console.log(i)
    let low = 1, high = i-1
    while(low <= high){
        let sqlow = low*low
        let sqhigh = high*high
        let total = sqlow + sqhigh
        if(total == c || sqlow == c || sqhigh == c) return true
        else if(total > c) high--
        else low++
    }
    return false
};