/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    function dfs(arr, path){
        if(path.length == arr.length){
            res.push([...path])
            return
        }

        for(let i=0; i<arr.length; i++){
            if(!visited[i]){
                if(i > 0 && arr[i] == arr[i-1] && visited[i-1]) continue
                path.push(arr[i])
                visited[i] = 1
                dfs(arr,path)
                path.pop()
                visited[i] = 0
            }
        }
    }
    nums.sort((a,b) => a-b)
    let res = [], visited = new Array(nums.length).fill(0)
    dfs(nums,[])
    return res
    
};