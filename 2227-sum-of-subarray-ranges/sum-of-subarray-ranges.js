/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    // sum of subarray minimum
    let stack = [], n = nums.length
    let left = new Array(n).fill(0)
    let right = new Array(n).fill(0)

    // finding previous less element
    for(let i=0; i<nums.length; i++){
        let count = 1
        while(stack.length && nums[i] < stack[stack.length-1][0]){
            count += stack.pop()[1]
        }
        stack.push([nums[i], count])
        left[i] = count
        
    }

    stack = []

    // finding next less element
    for(let i=n-1; i>=0; i--){
        let count = 1
        while(stack.length && nums[i] <= stack[stack.length-1][0]){
            count += stack.pop()[1]
        }
        stack.push([nums[i], count])
        right[i] = count
    }

    let minimum = 0
    for(let i=0; i<n; i++){
        minimum += nums[i] * left[i] * right[i]
    }

    // now finding the maximum
    // next greater element
    let l = new Array(n).fill(0), r = new Array(n).fill(0)
    let s = []

    for(let i=0; i<n; i++){
        let count = 1
        while(s.length && nums[i] > s[s.length-1][0]){
            count += s.pop()[1]
        }
        s.push([nums[i], count])
        l[i] = count
    }

    s = []

    for(let i=n-1; i>=0; i--){
        let count = 1
        while(s.length && nums[i] >= s[s.length-1][0]){
            count += s.pop()[1]
        }
        s.push([nums[i], count])
        r[i] = count
    }

    let maximum = 0
    for(let i=0; i<n; i++){
        maximum += nums[i] * l[i] * r[i]
    }

    return maximum - minimum




    
};