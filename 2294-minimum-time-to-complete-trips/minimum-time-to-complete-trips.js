/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {

    function check(maxtime){
        let trips = 0, curtime = 0
        for(let t of time){
            trips += Math.floor(maxtime/t)
        }
        return trips >= totalTrips
    }
    // give is the total number of trips
    // now we need minimum time required for all buses to complete total trips

    let l = 1, r = Math.max(...time)*totalTrips, ans = 0

    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        if(check(mid)){
            ans = mid
            r = mid - 1
        }else{
            l = mid + 1
        }
    }
    return ans
};