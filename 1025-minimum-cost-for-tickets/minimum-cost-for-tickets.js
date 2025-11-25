/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    let n = days.length;
    let dp = new Array(n).fill(-1);

    function f(i) {
        if (i >= n) return 0;
        if (dp[i] !== -1) return dp[i];

        // Option 1: 1-day pass
        let cost1 = costs[0] + f(i + 1);

        // Option 2: 7-day pass
        let j = i;
        let end7 = days[i] + 6;
        while (j < n && days[j] <= end7) j++;
        let cost7 = costs[1] + f(j);

        // Option 3: 30-day pass
        j = i;
        let end30 = days[i] + 29;
        while (j < n && days[j] <= end30) j++;
        let cost30 = costs[2] + f(j);

        return dp[i] = Math.min(cost1, cost7, cost30);
    }

    return f(0);
};