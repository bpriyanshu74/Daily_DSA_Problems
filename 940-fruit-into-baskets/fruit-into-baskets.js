/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let map = new Map(), maxl = 0, left = 0, right = 0
    while(right < fruits.length){
        map.set(fruits[right], map.get(fruits[right]) + 1 || 1)

        if(map.size > 2){
            map.set(fruits[left], map.get(fruits[left]) - 1)
            if(map.get(fruits[left]) == 0){[
                map.delete(fruits[left])
            ]}
            left++
        }

        maxl = Math.max(maxl, right-left+1)
        right++
    }

    return maxl
    
};