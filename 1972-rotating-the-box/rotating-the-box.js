/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    for(let i=0; i<box.length; i++){
        let row = box[i]
        let left = 0, right = row.length - 1, end = 0
        while(left <= right && end <= right){
                if(row[end] == '.'){
                    [row[end], row[left]] = [row[left], row[end]]
                    left++
                    
                }
                else if(row[end] == '*'){
                    left = end
                    left++
                }
                end++  
        }
    }
    console.log(box)
    
    const output = [];
    for (let columnIndex = 0; columnIndex < box[0].length; columnIndex++) {
        output[columnIndex] = [];
        for (let rowIndex = box.length - 1; rowIndex >= 0; rowIndex--) {
            output[columnIndex].push(box[rowIndex][columnIndex]);
        }
    }
    return output;


    
};