/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {

    function dfs(graph, color, node){
        for(let nbr of graph[node]){
            if(color[nbr] == color[node]) return false
            if(color[nbr] == -1){
                color[nbr] = 1 - color[node]
                if(!dfs(graph, color, nbr)) return false
            }
        }
        return true
    }

    let n = graph.length
    let color = new Array(n).fill(-1)

    for(let i=0; i<n; i++){
        if(color[i] == -1){
            color[i] = 0
            if(!dfs(graph, color, i)) return false
        }
    }
    return true
};