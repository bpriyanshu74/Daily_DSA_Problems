/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack = [];
    let score = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push('('); // Add a plate to the stack
        } else {
            stack.pop(); // Take away a plate from the stack
            
            // Now check if the previous character was also '('
            if (s[i - 1] === '(') {
                score += Math.pow(2, stack.length); // Calculate score based on nesting depth
            }
        }
    }
    
    return score;
    
};