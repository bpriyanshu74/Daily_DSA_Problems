/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if(points.length <= 2) return points.length
    // brute force
    // let maxpoints = 0
    // for(let i=0; i<points.length; i++){
    //     for(let j=0; j<points.length; j++){
    //         if(i==j) continue

    //         let [x1,y1] = points[i], [x2,y2] = points[j]

    //         let slope = (y2-y1)/(x2-x1), count = 2

    //         for(let k=0; k<points.length; k++){
    //             if(points[k] == points[i] || points[k] == points[j]) continue

    //             let [x3,y3] = points[k]

    //             let slope2 = (y3-y1)/(x3-x1)
    //             let slope3 = (y3-y2)/(x3-x2)

    //             if(slope2 == slope3) count++
    //         }   

    //         maxpoints = Math.max(count, maxpoints)
    //     }
    // }
    // return maxpoints

    // now we can optimize this o(n3) to o(n2) using hashmap
    let maxpoints = 0

    for(let i=0; i<points.length; i++){
        let hashmap = new Map()
        for(let j=0; j<points.length; j++){
            if(i==j) continue
            let [x1,y1] = points[i], [x2,y2] = points[j]
            let slope = (y2-y1)/(x2-x1)

            hashmap.set(slope, (hashmap.get(slope)||1)+1)
        }
        for(let values of hashmap.values()){
            maxpoints = Math.max(maxpoints, values)
        }
    }
    return maxpoints
    
};