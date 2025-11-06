/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {}, res = []

    for(let num of nums1){
        map[num] = (map[num] || 0) + 1
    }

    for(let num of nums2){
        if(num in map && map[num] > 0){
            res.push(num)
            map[num]--
        }
    }

    return res
};