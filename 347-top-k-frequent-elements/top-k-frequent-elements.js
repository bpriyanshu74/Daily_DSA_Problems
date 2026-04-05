/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hashmap = new Map()

    for(let num of nums){
        hashmap.set(num, (hashmap.get(num) || 0) + 1)
    }

    // now we have the frequemcy hashmap

    // sorting the hashmap

    let hasharray = Array.from(hashmap)

    hasharray.sort((a,b) => b[1] - a[1])

    let res = []

    for(let i=0; i<k; i++){
        res.push(hasharray[i][0])
    }

    return res
};