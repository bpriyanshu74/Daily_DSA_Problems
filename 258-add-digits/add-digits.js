/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num <= 9) return num

    let newnum = 0
    while(num > 0){
        newnum += num % 10
        num = Math.floor(num / 10)
    }

    return addDigits(newnum)
    
};