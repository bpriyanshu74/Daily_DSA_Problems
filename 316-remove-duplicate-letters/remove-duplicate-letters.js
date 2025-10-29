/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let freq = {}, visited = new Set(), stack = []

    // building frequency map

    for(let ch of s){
        freq[ch] = (freq[ch] || 0 ) + 1
    }
    
    for(let c of s){
        freq[c]--

        if(visited.has(c)) continue

        while(stack.length && c < stack[stack.length-1] && freq[stack[stack.length-1]] > 0){
            visited.delete(stack.pop())
        }
        stack.push(c)
        visited.add(c)
        
    }
    return stack.join('')
};