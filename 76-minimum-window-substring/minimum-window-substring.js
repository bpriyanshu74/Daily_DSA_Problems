/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let minlength = 1000000, n = s.length, m = t.length, sindex = -1, l=0, count = 0

    let hasharray = new Array(256).fill(0)

    for(let char of t){
        let index = char.charCodeAt(0)
        hasharray[index]++
    }

    for(let r=0; r<s.length; r++){
        let index = s[r].charCodeAt(0)

        if(hasharray[index] > 0) count++
        hasharray[index]--

        while(count == m){
            let lindex = s[l].charCodeAt(0)
          
            if(r-l+1 < minlength){
                minlength = r-l+1
                sindex = l
            }
            if(hasharray[lindex] == 0) count--
            hasharray[lindex]++
            l++
            
        }
    }


    return sindex === -1 ? "" : s.slice(sindex, sindex+minlength)
};