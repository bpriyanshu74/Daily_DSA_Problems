/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    let left = 0, right = tokens.length-1
    let score = 0
    tokens.sort((a,b) => a-b)
    while(left <= right){
        if(tokens[left] <= power){
            power -= tokens[left]
            left++
            score++
        }
        else{
            if(score == 0) return 0
            else{
                power += tokens[right]
                right-- 
                if(right >= left) score --
            }
        }
        
    }
    console.log(power)
    return score
    
};