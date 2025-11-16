/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1], n = rowIndex

    for(let i=1 ; i<=n; i++){
        let prev = row[i-1]
        row.push(prev * (n-i+1)/i)
    }

    return row
};