/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    let map = new Map()

    for(let i=0; i<arr.length; i++){
        let r = ((arr[i] % k) + k) %k
        map.set(r, (map.get(r)||0) + 1)
    }

    for(let [r,count] of map){
        if(r == 0){
            if(count % 2 !== 0) return false
        }else{
            let complement = k - r

            if((map.get(complement) || 0) != count) return false
        }
    }
    return true
};