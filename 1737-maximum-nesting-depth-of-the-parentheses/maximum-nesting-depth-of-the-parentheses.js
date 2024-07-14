/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    var currentDepth = 0
    var maxDepth = 0
    for( var i= 0; i< s.length; i++){
        if(s[i] == "("){
            currentDepth++
            maxDepth = Math.max(currentDepth, maxDepth)
        }else if(s[i] == ")" ){
            if(currentDepth > 0){
                 currentDepth--
            }
           
        }
    }
    return maxDepth
};