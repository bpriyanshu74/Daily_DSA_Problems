/**
 * @param {number[]} forts
 * @return {number}
 */
var captureForts = function(forts) {

    function capture(arr){
        let max_cap = 0
        for(let i=0; i<arr.length-1; i++){
            if(arr[i] == 1){
                let k = i+1, count = 0
                while(k < arr.length){
                    if(arr[k] == 0){
                        count++
                        k++
                    }
                    else{
                        if(arr[k] == -1) max_cap = Math.max(max_cap, count)
                        break
                    }
                }
            }
            else{
                continue
            }
        }
        return max_cap
    }

    let left_capture = capture(forts)
    let reversed_forts = [...forts].reverse()
    let right_capture = capture(reversed_forts)

    return Math.max(left_capture, right_capture)
    
};