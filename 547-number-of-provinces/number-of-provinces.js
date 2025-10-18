/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let n = isConnected.length
    let adj = new Array(n).fill().map(() => [])

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(isConnected[i][j] == 1){
                adj[i].push(j)
                adj[j].push(i)
            }
        }
    }

    let visited = new Array(n).fill(0)
    let province = 0

    for(let i=0; i<n; i++){
        if(!visited[i]){
            province++

            let q = [i]
            visited[i] = 1

            while(q.length){
                for(let i=0; i<q.length; i++){
                    let node = q.shift()
                    for(let nbr of adj[node]){
                        if(!visited[nbr]){
                            visited[nbr] = 1
                            q.push(nbr)
                        }
                    }
                }
            }
        }
    }
    return province


    
};