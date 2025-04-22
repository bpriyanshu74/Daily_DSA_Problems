/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if(bloomDay.length < m*k) return -1

    function makePossible(day, arr, boq, flow){
        let newboq = 0, count = 0
        for(let i=0; i<arr.length; i++){
            if(arr[i] <= day){
                count++
            }
            else{
                newboq += Math.floor(count / flow)
                count = 0
            }
        }
        newboq += Math.floor(count / flow)
        
        return newboq >= boq
    }
   
    let l = Math.min(...bloomDay), r = Math.max(...bloomDay), ans = r
    while(l <= r){
        let mid = l + Math.floor((r-l)/2)
        if(makePossible(mid, bloomDay, m, k)){
            ans = mid
            r = mid - 1
        }
        else{
            l = mid + 1
        }
    }
    return ans
    
};