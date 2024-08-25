/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let l=0,r=0,maxl=0,map=new Map()
    let n = fruits.length
    while(r<n){
        if(map.has(fruits[r])){
            map.set(fruits[r], map.get(fruits[r])+1)
        }
        else{
            map.set(fruits[r],1)
        }
        if(map.size > 2){
            map.set(fruits[l], map.get(fruits[l]) - 1)   
            if(map.get(fruits[l]) == 0) map.delete(fruits[l])
            l++
        }
        if(map.size <= 2){
            maxl = Math.max(maxl, r-l+1)
        }
        r++
    }
    return maxl
    
};