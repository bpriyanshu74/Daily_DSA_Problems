/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let initialsum = 0, maxsum = 0, n = cardPoints.length
    for(let i=0; i< k; i++){
        initialsum += cardPoints[i]
    }

    maxsum = initialsum

    let left = k-1, right = n-1
    while(left >= 0){
        initialsum = (initialsum - cardPoints[left]) + cardPoints[right]

        maxsum = Math.max(maxsum, initialsum)

        left--
        right--
    }

    return maxsum

    
};