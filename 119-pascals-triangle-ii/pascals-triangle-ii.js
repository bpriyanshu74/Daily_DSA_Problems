/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

    function nCr(n, r) {
        let res = 1;
    
        // calculating nCr:
        for (let i = 0; i < r; i++) {
        res = res * (n - i);
        res = res / (i + 1);
        }
        return res;
    }

    let n = rowIndex+1
    
    // printing the entire row n:
    let temp = []
    for (let c = 1; c <= n; c++) {
        temp.push(nCr(n-1,c-1))
    }
    return temp
    
  

    
};