/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    // Insert all elements into a set for O(1) lookup
    const numSet = new Set(nums);
    let longestStreak = 0;

    // Iterate through each number in the array

    for (let num of numSet) {

        // Only start counting from the beginning of a sequence

        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Find the length of the consecutive sequence starting at 'num'
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            // Update the longest streak found
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
    
};