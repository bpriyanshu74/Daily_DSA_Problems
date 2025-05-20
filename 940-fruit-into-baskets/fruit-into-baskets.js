/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let l=0, r=0, maxcount = 0, map = new Map()

    while( r < fruits.length){
        map.set(fruits[r], (map.get(fruits[r])||0) +1)

        if(map.size > 2){
            map.set(fruits[l], map.get(fruits[l]) - 1)
            if(map.get(fruits[l]) == 0){
                map.delete(fruits[l])
            }
            l++
        }
        
        maxcount = Math.max(maxcount, r-l+1)
        
        r++
    }
    return maxcount
    
};