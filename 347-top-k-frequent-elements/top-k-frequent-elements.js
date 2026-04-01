/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // we can use map for to store their frequencis and freq as key 
    // sort the map based on frequecy, traverse the map get the k values


    let hm = new Map()

    for(let num of nums){
        if(hm.has(num)){
            hm.set(num, hm.get(num) + 1) 
        }else{
            hm.set(num, 1)
        }
    }

    let hm_arr = Array.from(hm)
    hm_arr.sort((a,b) => 
        b[1] - a[1]
    )

    let res = []
    for(let i=0; i<k; i++){
        res.push(hm_arr[i][0])
    }

    return res




};