/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(s.length == numRows || numRows == 1) return s
    let rows = new Array(numRows).fill().map(() => '')
    
    let cur_row = 0, goingdown = false

    for(let ch of s){
        rows[cur_row] += ch

        if(cur_row == 0 || cur_row == numRows - 1) goingdown = !goingdown

        cur_row += goingdown ? 1 : -1
    }

    return rows.join('')
};