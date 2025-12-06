/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let f = new Map()

    let l = 0, maxf = 0

    for(let r=0; r<fruits.length; r++){
        f.set(fruits[r], (f.get(fruits[r]) || 0) + 1)

        while(f.size > 2){
            f.set(fruits[l], f.get(fruits[l]) - 1)
            if(f.get(fruits[l]) <= 0) f.delete(fruits[l])
            l++
        }
        maxf = Math.max(maxf, r-l+1)
    }

    return maxf
};