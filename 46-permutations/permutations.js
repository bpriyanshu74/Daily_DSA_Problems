/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    function dfs(arr, path){
        if(path.length == arr.length){
            res.push([...path])
            return
        }

        for(let i=0; i<arr.length; i++){
            if(!visited[i]){
                path.push(arr[i])
                visited[i] = 1
                dfs(arr,path)
                path.pop()
                visited[i] = 0
            }
        }
    }

    let res = [], visited = new Array(nums.length).fill(0)
    dfs(nums,[])
    return res
    
};