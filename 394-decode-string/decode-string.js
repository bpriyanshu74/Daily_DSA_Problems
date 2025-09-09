/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let currentNum = 0;
    let currentStr = '';

    for (let char of s) {
        if (!isNaN(char)) {
            // Build the number (could be multiple digits)
            currentNum = currentNum * 10 + Number(char);
        } else if (char === '[') {
            // Push current state to stack
            stack.push([currentStr, currentNum]);
            currentStr = '';
            currentNum = 0;
        } else if (char === ']') {
            // Pop and build the string
            let [prevStr, num] = stack.pop();
            currentStr = prevStr + currentStr.repeat(num);
        } else {
            // Regular character → Add to current string
            currentStr += char;
        }
    }

    return currentStr;
    
};