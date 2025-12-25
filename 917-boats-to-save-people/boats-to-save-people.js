/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let boats = 0
    people.sort((a,b) => a-b)

    let l = 0, r = people.length-1

    while(l <= r){
        let wt = people[l] + people[r]

        if(wt > limit){
            r--
        }else{
            l++
            r--
        }
        boats++
    }

    return boats


};