/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let n = ratings.length, count = 1, i=1, sum = 1

    while(i < n){
        if(ratings[i-1] == ratings[i]){
            i++
            sum = sum + 1 
            continue
        }
        let peak = 1
        while(i < n && ratings[i-1] < ratings[i]){
            i++
            peak++
            sum += peak
            
        }
        let down = 1
        while(i < n && ratings[i-1] > ratings[i]){
            i++
            sum += down
            down++
        }

        if(down > peak) sum += down-peak
    }

    return sum

    
};