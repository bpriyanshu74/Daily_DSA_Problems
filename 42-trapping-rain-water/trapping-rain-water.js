/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height){
    let lb = new Array(height.length).fill(0)
    let rb = new Array(height.length).fill(0)
    let trap = 0

    for(let i=0; i<height.length; i++){
        if(i == 0) lb[i] = height[i]
        else{
            lb[i] = Math.max(lb[i-1], height[i])
        }
    }

    for(let i=height.length-1; i>=0; i--){
        if(i == height.length-1){
            rb[i] = height[i]
        }
        else{
            rb[i] = Math.max(rb[i+1], height[i])
        }
    }
    
    for(let i=0; i<height.length; i++){
        trap += Math.min(lb[i], rb[i]) - height[i]
    }

    return trap
};