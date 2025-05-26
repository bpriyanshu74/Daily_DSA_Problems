/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let minlength = 100000, n = s.length, m = t.length

    let hasharray = new Array(256).fill(0)

    for(let char of t){
        let index = char.charCodeAt(0)
        hasharray[index]++
    }

    let l=0, count = 0, sindex = -1

    for(let r=0; r<n; r++){
        let index = s[r].charCodeAt(0)
        if(hasharray[index] > 0) count++
        hasharray[index]--

        while(count == m){
            if(r-l+1 < minlength){
                minlength = r-l+1
                sindex = l
            }
            let lindex = s[l].charCodeAt(0)
            hasharray[lindex]++

            if(hasharray[lindex] > 0) count-=1

            l++
        }
    }

    return sindex == -1 ? "" : s.slice(sindex, sindex + minlength)
};