/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    // score = 0, tokens = [...], power = p

    // face-up = reduce power gain +1 score
    // face-down = reduce score by 1 to get that token power

    tokens.sort((a,b) => a-b)

    let l = 0, r = tokens.length-1, score = 0, maxscore = 0

    // edge case 
    if(power < tokens[0]) return 0

    while(l <= r){
        // intially our score is 0, we can only play face-up
        if(score == 0 && power < tokens[l]) break

        if(power >= tokens[l]){
            score += 1
            power -= tokens[l++]
        }else{
            score -= 1
            power += tokens[r--]
        }
        maxscore = Math.max(maxscore, score)
    }

    return maxscore
};