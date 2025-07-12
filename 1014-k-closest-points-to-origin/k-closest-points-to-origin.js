/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let minheap = []

    for(let p of points){
        let x = p[0], y = p[1]

        let dis = Math.sqrt((x*x) + (y*y))

        minheap.push([dis, p])
    }

    minheap.sort((a,b) => a[0] - b[0])
    let res = []

    for(let i=0; i<k; i++){
        res.push(minheap[i][1])
    }

    return res
    
};