/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let arr = []

    let temp = head
    while(temp){
        arr.push(temp.val)
        temp = temp.next
    }
    let l = left-1, r = right-1

    while(l < r){
        [arr[l], arr[r]] = [arr[r], arr[l]]
        l++
        r--
    }

    temp = head
    for(let itr of arr){
        temp.val = itr
        temp = temp.next
    }

    return head
    
};