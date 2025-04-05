/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    // Area of the first rectangle
    let area1 = (ax2 - ax1) * (ay2 - ay1);

    // Area of the second rectangle
    let area2 = (bx2 - bx1) * (by2 - by1);

    // Calculate overlap in x-direction and y-direction
    let overlapWidth = Math.min(ax2, bx2) - Math.max(ax1, bx1);
    let overlapHeight = Math.min(ay2, by2) - Math.max(ay1, by1);

    // If there is overlap, compute overlap area
    let overlapArea = 0;
    if (overlapWidth > 0 && overlapHeight > 0) {
        overlapArea = overlapWidth * overlapHeight;
    }

    // Total area = sum of both rectangles - overlapping area
    return area1 + area2 - overlapArea;
};