/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let cur = [], ans = []
    helper(s,cur,ans)
    return ans
    function helper(s, cur,ans){
        if(s.length == 0){
            ans.push([...cur])
            return
        }

        for(let i=1; i<=s.length; i++){
            let prefix = s.substring(0,i)
            let remaining = s.substring(i)
            if(isPalindrome(prefix)){
                cur.push(prefix)
                helper(remaining, cur, ans)
                cur.pop()
            }
        }
    }

    function isPalindrome(s){
        let l=0, r=s.length-1
        while(l <= r){
            if(s[l] != s[r]){
                return false
            }else{
                l++
                r--
            }
        }
        return true
    }
    
};