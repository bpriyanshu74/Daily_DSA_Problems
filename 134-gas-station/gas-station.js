/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let total = 0, tank = 0, start = 0

    for(let i=0; i<gas.length; i++){
        let gain = gas[i] - cost[i]
        total += gain
        tank += gain

        if(tank < 0){
            start = i+1
            tank = 0
        }
    }
    return total >= 0 ? start : -1
    
};