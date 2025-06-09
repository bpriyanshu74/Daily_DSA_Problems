/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let maxpoints = 1

    for(let i=0; i< points.length; i++){
        let x1 = points[i][0], y1 = points[i][1]
        for(let j=0; j< points.length; j++){
            if(i == j) continue
            let x2 = points[j][0], y2 = points[j][1]

            let slope1 = (y2-y1)/(x2-x1), cur_points = 2

            for(let k=0; k<points.length; k++){
                if(i==k || j==k) continue

                let x3 = points[k][0], y3 = points[k][1]

                let slope2 = (y3-y1)/(x3-x1)

                if(slope2 == slope1){
                    cur_points++
                }
            }
            maxpoints = Math.max(cur_points, maxpoints)
        }
    }

    return maxpoints
    
};