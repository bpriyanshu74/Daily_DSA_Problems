/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {

    function dfs(node){
        v[node] = 1
        pv[node] = 1
        for(let nbr of graph[node]){
            if(!v[nbr]){
                if(dfs(nbr)) return true
            }else if(pv[nbr]) return true
        }
        pv[node] = 0
        return false
    }

    let n = numCourses, e = [...prerequisites]
    let graph = new Array(n).fill().map(() => [])
    for(let [u,v] of e){
        graph[u].push(v)
    }

    let v = new Array(n).fill(0), pv = new Array(n).fill(0)

    for(let i=0; i<n; i++){
        if(!v[i]){
            if(dfs(i)) return false
        }
    }
    return true
};