/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let count = 0, n = s.length
    let map = [-1,-1,-1]
    for(let i=0; i<n; i++){
        switch(s[i]){
            case 'a':
                map[0] = i 
                break;
            case 'b': 
                map[1] = i 
                break;
            case 'c':
                map[2] = i
                break;
        }
        if(map[0] != -1 && map[1] != -1 && map[2] != -1){
        count += 1 + Math.min(map[0],map[1],map[2])
        }
    }
    return count
    
};