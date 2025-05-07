/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let arr = Array.from(s)
    let result = []

    function helper(arr,index){
        if(index == arr.length){
            result.push(arr.join(''))
            return
        }
        if(arr[index] >= "0" && arr[index] <= "9"){
            helper(arr, index+1)
        }
        else{
            let org_ele = arr[index]
            arr[index] = org_ele.toUpperCase()
            helper(arr, index+1)
            arr[index] =  org_ele.toLowerCase()
            helper(arr, index+1)
        }
    }

    helper(arr,0)
    return result
    
};