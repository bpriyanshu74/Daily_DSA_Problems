/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {

    function dfs(node){
        if(hasCycle) return 
        v[node] = 1
        for(let nbr of graph[node]){
            if(v[nbr] == 0){
                dfs(nbr)
            }else if(v[nbr] == 1){
                hasCycle = true
                return
            }
        }
        v[node] = 2
        res.push(node)
    }

    let n = numCourses, e = [...prerequisites]

    let res = [], v = new Array(n).fill(0), hasCycle = false
    let graph = new Array(n).fill().map(() => [])

    for(let [u,v] of e){
        graph[v].push(u)
    }

    for(let i=0; i<n; i++){
        if(!v[i]){
            dfs(i)
        }
    }
    if(hasCycle) return []

    return res.reverse()
};