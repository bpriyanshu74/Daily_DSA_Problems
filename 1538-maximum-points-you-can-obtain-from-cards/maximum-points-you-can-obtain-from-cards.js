/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let left = 0, right = cardPoints.length-1, sum=0, maxsum = 0
    while(left < k){
        sum += cardPoints[left]
        left++
    }
    maxsum = sum
    // edge case 
    if(k == cardPoints.length) return maxsum

    while(right > 0 && k != 0){
        sum = sum + cardPoints[right] - cardPoints[k-1]
        k--
        right--
        maxsum = Math.max(sum, maxsum)
    }
    return maxsum
    
};