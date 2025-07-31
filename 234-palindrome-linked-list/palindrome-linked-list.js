/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [], temp = head
    while(temp){
        arr.push(temp.val)
        temp = temp.next
    }

    let l=0, r = arr.length-1
    while(l < r){
        if(arr[l] != arr[r]) return false
        l++
        r--
    }
    return true
    
};