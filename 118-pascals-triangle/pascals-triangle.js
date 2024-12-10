/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    

    let sample = [[1], [1,1]], k = 2
    if(numRows == 2) return sample
    if(numRows == 1) return [sample[0]] 

    while(k < numRows){
        let med = []
        for(let i=0; i<sample[k-1].length; i++)
        {   
            for(let j=i+1; j<sample[k-1].length; j++)
            {
                med.push(sample[k-1][i] + sample[k-1][j])
                break
            }  
        }
        sample.push([1,...med,1])
        
        k++
    }

    return sample
    
};