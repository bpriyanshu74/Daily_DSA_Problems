/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    // use x and y co-ordinates to map the node x - for horizontal, y - for vertical 

    // level order traversal

    // nested map to store 

    // initial map ket would be the x and since each x can have multiple levels(y) so multiple y can exist for sigle x

    if(!root) return [] 

    let map = new Map(), q = [[0, 0, root]], front = 0

    function insert(x, y, value){
        if(!map.has(x)){
            map.set(x, new Map())
        }

        if(!map.get(x).has(y)){
            map.get(x).set(y, [])
        }

        map.get(x).get(y).push(value)
        
    }

    while(front < q.length){
        let size = q.length - front

        for(let i=0; i<size; i++){
            let [x, y, node] = q[front++]

            insert(x,y,node.val)

            if(node.left){
                q.push([x-1, y+1, node.left])
            }
            if(node.right){
                q.push([x+1, y+1, node.right])
            }
        }
    }

    let ans = []

    // sorting the map to get left to right order
    let sortedX = [...map.keys()].sort((a,b) => a-b)

    // now sorting each of the item

    for(let x of sortedX){
        let col = []

        let sortedY = [...map.get(x).keys()].sort((a,b) => a-b)

        for(let y of sortedY){
            col.push(...map.get(x).get(y).sort((a,b)=> a-b))
        }

        ans.push(col)
    }

    return ans
    
    
};