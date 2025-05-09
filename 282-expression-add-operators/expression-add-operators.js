/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    let result = []

    function backtrack(index, exp, eval, prev_op){
        if(index == num.length){
            if(eval == target){
                result.push(exp)
            }
        }

        for(let i=index; i<num.length; i++){

            if(i > index && num[index] == 0) break
            let cur_str = num.substring(index, i+1)
            let cur = Number(cur_str)

            

            if(index === 0){
                backtrack(i+1, cur_str, cur, cur)
            }
            else{
                // for "+"
                backtrack(i+1, exp + "+" + cur_str, eval+cur, cur)
                // for "-"
                backtrack(i+1, exp + "-" + cur_str, eval-cur, -cur)
                // for "*"
                backtrack(i+1, exp + "*" + cur_str, eval-prev_op+prev_op*cur, prev_op*cur)
            }
        }
    }

    backtrack(0,"",0,0)
    return result
    
};