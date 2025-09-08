/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const stack = [];
    
    for (let i = 0; i < num.length; i++) {
        const digit = num[i];
        
        while (k > 0 && stack.length && digit < stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    // Remove remaining k digits from the end
    while (k > 0) {
        stack.pop();
        k--;
    }

    // Remove leading zeros
    while (stack.length && stack[0] === '0') {
        stack.shift();
    }

    const ans = stack.join('');
    return ans.length ? ans : '0';
};