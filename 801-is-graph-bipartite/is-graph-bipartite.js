/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let color = new Array(graph.length).fill(-1)
    for(let i=0; i<graph.length; i++){
        if(color[i] == -1){
            color[i] = 0
            if(!dfs(color, graph, i)) return false
        }
    }
    return true

    function dfs(color, graph, node){
        for(let nbr of graph[node]){
            if(color[nbr] == -1){
                color[nbr] = 1 - color[node]
                if(!dfs(color, graph, nbr)) return false
            }
            else if(color[nbr] == color[node]) return false
        }
        return true
    }
    
};