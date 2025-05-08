/**
 * @param {string} n
 * @return {string}
 */
var smallestGoodBase = function(n) {
        const N = BigInt(n);
    const max_m = Math.floor(Math.log2(Number(N)));  // max length of sequence - 1

    // Try all lengths m from max_m down to 1
    for (let m = max_m; m >= 1; m--) {
        let left = 2n;
        let right = N - 1n;

        while (left <= right) {
            let k = (left + right) / 2n;
            let sum = 1n;
            let curr = 1n;

            for (let i = 1; i <= m; i++) {
                curr *= k;
                sum += curr;
            }

            if (sum === N) {
                return k.toString();
            } else if (sum < N) {
                left = k + 1n;
            } else {
                right = k - 1n;
            }
        }
    }

    // If no such base found, then answer is always N - 1
    return (N - 1n).toString();
};