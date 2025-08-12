/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let v = numCourses, edges = prerequisites

    let indegree = new Array(v).fill(0)
    let adj = new Array(v).fill().map(() => [])

    for(let [u,v] of edges){
        adj[v].push(u)
        indegree[u]++
    }
    let res = [], q = []
    for(let i=0; i<v; i++){
        if(indegree[i] == 0)q.push(i)
    }

    while(q.length){
        let node = q.shift()
        res.push(node)
        for(let nbr of adj[node]){
            indegree[nbr]--
            if(indegree[nbr] == 0)q.push(nbr)
        }
    }

    return res.length == v ? res : []
    
};