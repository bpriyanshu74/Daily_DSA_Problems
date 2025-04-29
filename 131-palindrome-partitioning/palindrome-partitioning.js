/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {

    let ans = [], current_partition = []
    helper(s,ans,current_partition)
    return ans

    function helper(s,ans, current_partition){
        if(s.length == 0){
            ans.push([...current_partition])
            return
        }
        // taking first partition at index 1
        for(let partition=1; partition <= s.length; partition++){
            let prefix = s.substring(0,partition)
            let remaining = s.substring(partition,s.length)
            if(isPallindrome(prefix)){
                current_partition.push(prefix)
                helper(remaining, ans, current_partition)
                current_partition.pop()
            }
        }
        function isPallindrome(s){
            let l = 0, r = s.length-1
                while(l<=r){
                    if(s[l] == s[r]){
                        l++
                        r--
                    }
                    else{
                        return false
                    }
                }
            return true
        }
    }
    
};