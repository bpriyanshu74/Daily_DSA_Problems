/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let op = new Array(n+1)
    op[0] = "0"

    for(let i=1; i<=n; i++){
        if(i % 3 == 0 && i % 5 == 0){
            op[i] = "FizzBuzz"
        }
        else if(i % 3 == 0){
            op[i] = "Fizz"
        }
        else if(i % 5 == 0){
            op[i] = "Buzz"
        }else {
            op[i] = String(i)
        }
    }

    return op.slice(1)
};