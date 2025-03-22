/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    let maxmarr1 = new Array(arr1.length)
    let maxmarr2 = new Array(arr2.length)

    let m1 = -Infinity, m2 = -Infinity, l1 = Infinity, l2 = Infinity, m3 = -Infinity, m4 = -Infinity, l3 = Infinity, l4 = Infinity

let fmax = -Infinity
    for(let i=0; i<arr1.length; i++){
        m1 = Math.max(m1, arr1[i]+arr2[i]+i)
        l1 = Math.min(l1, arr1[i]+arr2[i]+i)

        m2 = Math.max(m2, i+arr2[i]-arr1[i])
        l2 = Math.min(l2, i+arr2[i]-arr1[i])

        m3 = Math.max(m3, arr1[i]-arr2[i]+i)
        l3 = Math.min(l3, arr1[i]-arr2[i]+i)

        m4 = Math.max(m4, i-arr1[i]-arr2[i])
        l4 = Math.min(l4, i-arr1[i]-arr2[i])
        

        fmax = Math.max(m1-l1, m2-l2, m3-l3, m4-l4)
    }
    

    return fmax
    
    
};