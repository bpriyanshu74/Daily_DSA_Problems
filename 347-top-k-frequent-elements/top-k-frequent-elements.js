/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numsMap = new Map()
    for (let num of nums){
        if(numsMap.has(num)){
            numsMap.set(num,numsMap.get(num)+1)
        }
        else{
            numsMap.set(num,1)
        }
    }

    let sortedEntries = Array.from(numsMap.entries()).sort((a,b)=> b[1] - a[1])

    let temp = []
    for(let i = 0; i< k; i++){
        temp.push(sortedEntries[i][0])
    }
    return temp
    
};