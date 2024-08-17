/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    function helper(arr,currentPermutation){
        if(arr.length == 0){
            res.push(currentPermutation)
        }
        for(let i=0; i<arr.length ; i++){
            let val = arr[i]
            let remainingArr = arr.slice(0,i).concat(arr.slice(i+1))
            helper(remainingArr,currentPermutation.concat(val)) 
        }
    }
    helper(nums,[])
    return res
    
};