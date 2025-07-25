/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n < 0){
        x = 1/x
        n = -n
    }

    function power(x,n){
        if(n==0) return 1
        if(n % 2 == 0){
            return power(x*x, n/2)
        }
        else{
            return x*power(x,n-1)
        }
    }
    return power(x,n)
    
};