/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    // so this is a sliding window problem, to find the maxm window with just 2 fruits

    let maxcount = 0, l = 0, freq = new Map(), count = 0

    for(let r=0; r<fruits.length; r++){
        let f = fruits[r]
        freq.set(f, (freq.get(f) || 0) + 1)

        while(freq.size > 2){
            maxcount = Math.max(count, maxcount)
            freq.set(fruits[l], (freq.get(fruits[l])) - 1)
            count--
            if(freq.get(fruits[l]) <= 0) freq.delete(fruits[l])
            l++
        }
        count++
    }

    return Math.max(count, maxcount)

};