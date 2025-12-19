/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // brute force

    let maxm = -Infinity
    // for(let i=0; i<height.length-1; i++){
    //     for(j=i+1; j<height.length; j++){
    //         let area = Math.min(height[i], height[j]) * (j-i)
    //         maxm = Math.max(maxm, area)
    //     }
    // }


    // optimising it using two pointers

    let l = 0, r= height.length-1

    while(l < r){
        let area = Math.min(height[l], height[r]) * (r-l)
        maxm = Math.max(maxm, area)

        if(height[l] <= height[r]){
            l++
        }else{
            r--
        }
    }
    return maxm
};