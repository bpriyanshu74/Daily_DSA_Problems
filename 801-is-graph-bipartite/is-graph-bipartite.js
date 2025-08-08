/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    // lets do this using bfs
    let color = new Array(graph.length).fill(-1)
    for(let i=0; i<graph.length; i++){
        if(color[i] == -1){
            color[i] = 0
            let q = [i]
        
        while(q.length){
            let node = q.shift()
            for(let nbr of graph[node]){
                if(color[nbr] == -1){
                    color[nbr] = 1 - color[node]
                    q.push(nbr)
                }else if(color[nbr] == color[node]){
                        return false  
                }
            }
        }
        }
    }
    
    return true
    
};