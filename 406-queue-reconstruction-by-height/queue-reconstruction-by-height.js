/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a,b) => {
        if(a[0] == b[0]) return a[1]-b[1]
        return b[0]-a[0]
    })
    //insert on the basis of k
    let res = []
    for (let p of people) {
        res.splice(p[1], 0, p)
    }

    return res
};