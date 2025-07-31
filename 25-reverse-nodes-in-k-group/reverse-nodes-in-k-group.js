/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let arr = [], temp = head

    while(temp){
        arr.push(temp.val)
        temp = temp.next
    }

    let segments = Math.floor(arr.length/k), l = 0, r = k-1

    while(segments > 0){
        let templ = l, tempr = r
        while(templ < tempr){
            [arr[templ], arr[tempr]] = [arr[tempr], arr[templ]]
            templ++
            tempr--
        }
        segments--
        if(l+k < arr.length) l+=k
        if(r+k < arr.length) r+=k
    }
    let temp1 = head
    for(let i=0; i<arr.length; i++){
        temp1.val = arr[i]
        temp1 = temp1.next
    }

    return head
    
};