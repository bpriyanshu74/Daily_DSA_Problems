/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 0) {
        return [];
    }
    if (numRows === 1) {
        return [[1]];
    }

    let prevRows = generate(numRows - 1);
    let prevRow = prevRows[prevRows.length - 1];
    let currentRow = [1];

    for (let i = 1; i < numRows - 1; i++) {
        currentRow.push(prevRow[i - 1] + prevRow[i]);
    }

    currentRow.push(1);
    prevRows.push(currentRow);

    return prevRows;
    
};