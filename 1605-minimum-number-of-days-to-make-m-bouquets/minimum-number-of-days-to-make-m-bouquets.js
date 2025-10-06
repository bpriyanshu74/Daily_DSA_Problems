/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {

    function check(maxdays){
        let fcount = 0, boq = 0
        for(let bd of bloomDay){
            if(bd <= maxdays){
                fcount++
            }else{
                boq += Math.floor(fcount/k)
                fcount = 0
            }
        }
        boq += Math.floor(fcount/k)
        return boq >= m
    }
    let l = Math.min(...bloomDay), r = Math.max(...bloomDay), ans = -1

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