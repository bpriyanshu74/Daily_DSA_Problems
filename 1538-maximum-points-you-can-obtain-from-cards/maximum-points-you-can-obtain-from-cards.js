/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let left = 0, right = cardPoints.length - 1
    let maxSum = 0
    let initialSum = 0
    while(left < k){
        initialSum += cardPoints[left]
        left++
    }
    if(k == cardPoints.length) return initialSum
    maxSum = initialSum
    while(right > 0 && k != 0){
        initialSum  = initialSum - cardPoints[k-1] + cardPoints[right]
        maxSum = Math.max(initialSum, maxSum)
        right--
        k--
    }
    return maxSum
    
};