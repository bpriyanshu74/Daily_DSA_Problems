/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let maxpoints = 1

    for(let i=0; i<points.length; i++){
        let x1 = points[i][0], y1 = points[i][1]
        let hashmap = new Map()
        for(let j=0; j<points.length; j++){
            if(i==j) continue
            let x2 = points[j][0], y2 = points[j][1]

            let slope = (y2-y1)/(x2-x1)

            hashmap.set(slope, (hashmap.get(slope)|| 1) + 1)

            maxpoints = Math.max(maxpoints, hashmap.get(slope))
        }
    }

    return maxpoints
    
};