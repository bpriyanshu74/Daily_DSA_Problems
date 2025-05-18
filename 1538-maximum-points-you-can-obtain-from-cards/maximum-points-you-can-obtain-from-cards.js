/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let sum=0
    for(let i=0;i<k; i++){
        sum += cardPoints[i]
    }
    let maxsum = sum
    if(cardPoints.length == k) return maxsum

    for(let i=0; i<k; i++){
        sum = sum - cardPoints[k-i-1] + cardPoints[cardPoints.length-1-i]
        maxsum = Math.max(sum,maxsum)
    }
    return maxsum
    
};