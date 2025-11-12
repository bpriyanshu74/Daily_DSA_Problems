/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let visited = new Array(nums.length+1).fill(0)

    for(let num of nums){
        if(visited[num] == 1) return num
        visited[num] = 1
    } 
    
};