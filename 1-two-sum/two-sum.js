/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let n = nums.length
    let temparr = new Array(n)

    function findIndex(arr, key){
        for(let i=0; i< arr.length; i++){
            if(arr[i] == key) return i
        }
        return -1
        
    }

    for(let i=0 ;i< n ;i++){
        let diff = target - nums[i]
        let key = findIndex(temparr, diff)

        if(key == -1){
            temparr[i] = nums[i]
        }
        else{
            return [i,key]
        }
    }

};