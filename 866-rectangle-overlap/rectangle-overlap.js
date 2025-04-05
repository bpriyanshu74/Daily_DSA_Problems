/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    let [ax1,ay1,ax2,ay2] = rec1
    let [bx1, by1, bx2, by2] = rec2
    // over lap does not happen if 1 rec is lft of the other
    // or above the other
    // case: left || above
    return !(ax2 <= bx1 || bx2 <= ax1 || ay2 <= by1 || by2 <= ay1);
};