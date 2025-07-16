/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let min = 0, max = 0

    for(let char of s){
        if(char == '('){
            min += 1
            max += 1
        }
        else if(char == ')'){
            min -= 1
            max -= 1
        }else{
            min -= 1
            max += 1
        }

        if(min < 0) min = 0
        if(max < 0) return false
    }

    return min == 0
    
};