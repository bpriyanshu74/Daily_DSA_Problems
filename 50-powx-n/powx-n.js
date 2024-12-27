/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

    let tempn = n
    let ans = 1.0

    if(tempn < 0){
        tempn = -1 * tempn
    }

    while(tempn > 0){
        if(tempn%2){
            ans = ans*x 
            tempn -= 1

        }else{
            x = x * x
            tempn = Math.floor(tempn/2)
        }
    }
    console.log(ans)
    if(n < 0){
        ans = 1.0 / ans
    }
    return ans
    
};