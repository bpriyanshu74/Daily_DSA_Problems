/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function(position, m) {

    function can_we_place(pos, dis){
        let ball_count = 1, last = pos[0]
        for(let i=1; i<pos.length; i++){
            if(pos[i] - last >= dis){
                ball_count++
                last = pos[i]
            }
        }
        return ball_count
    }
    position.sort((a,b) => a-b)
    let max = position[position.length-1], min = position[0], ans = -1

    

    let l = 1, r = max-min
    while(l<=r){
        let mid = l + Math.floor((r-l)/2)
        if(can_we_place(position, mid) >= m){
            ans = mid
            l = mid + 1
        }
        else{
            r = mid - 1
        }
    }
    return ans
};