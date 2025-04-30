/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [], ds = [], visited = new Array(nums.length).fill(false)

    function helper(arr, ans, ds, visited){
    
        if(ds.length == arr.length){
            ans.push([...ds])
            return
        }
    

        for(let i=0; i<arr.length; i++){
            if(!visited[i]){
                visited[i] = true
                ds.push(arr[i])
                helper(arr, ans, ds, visited)
                visited[i] = false
                ds.pop()
                
            }
            
            
        }
    }
    helper(nums,ans,ds,visited)
    return ans
    
};