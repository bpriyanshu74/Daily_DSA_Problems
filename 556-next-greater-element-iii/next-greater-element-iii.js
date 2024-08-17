/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    let temp = n.toString().split('').map(digit => parseInt(digit, 10));

    // Find the first decreasing element from the end
    let i = temp.length - 2;
    while (i >= 0 && temp[i] >= temp[i + 1]) {
        i--;
    }

    // If no such element is found, return -1 as no greater permutation is possible
    if (i === -1) return -1;

    // Find the smallest element greater than temp[i] to the right of i
    let j = temp.length - 1;
    while (temp[j] <= temp[i]) {
        j--;
    }

    // Swap the elements at i and j
    [temp[i], temp[j]] = [temp[j], temp[i]];

    // Reverse the array after index i
    let firstPart = temp.slice(0, i + 1);
    let secondPart = temp.slice(i + 1).reverse();

    let newArray = [...firstPart, ...secondPart];

    // Convert the array back to a number
    let res = Number(newArray.join(''));

    // Check if the result is within the 32-bit signed integer range
    if (res > 2**31 - 1) return -1;

    return res;
};