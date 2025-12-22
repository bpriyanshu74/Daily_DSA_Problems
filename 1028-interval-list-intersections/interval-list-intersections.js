/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    if(firstList.length == 0 || secondList.length == 0) return []

    let ans = []

    let i=0, j = 0

    while(i < firstList.length && j < secondList.length){
        let [s1,e1] = firstList[i]
        let [s2,e2] = secondList[j]
        //merging condition

        let start = Math.max(s1,s2)
        let end = Math.min(e1,e2)

        if(start <= end){
            ans.push([start, end])
        }

        if(e1 < e2){
            i++
        }else{
            j++
        }
        
        
    }

    return ans


};