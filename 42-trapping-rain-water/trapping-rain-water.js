/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let stack = [], water = 0

    for(let i=0; i< height.length; i++){
        while(stack.length && height[i] > height[stack[stack.length-1]]){
            // let mid = stack.pop();
            // if (!stack.length) break;
            // let left = stack[stack.length - 1];
            // let width = i - left - 1;
            // let h = Math.min(height[left], height[i]) - height[mid];
            // water += width * h;
            let mid = stack.pop()
            if(!stack.length) break

            let left = stack[stack.length-1]

            let width = i - left - 1
            let h = Math.min(height[left], height[i]) - height[mid]
            water += width * h
        }
        stack.push(i)
    }
    return water
};