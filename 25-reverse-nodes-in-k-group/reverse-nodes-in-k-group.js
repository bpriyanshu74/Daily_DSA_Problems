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
    let arr = []

    let temp = head

    while(temp){
        arr.push(temp.val)
        temp = temp.next
    }

    for(let i=0; i<arr.length; i+=k){
        let l = i, r = i+k-1

        if(i+k > arr.length) break

        while(l < r){
            [arr[l], arr[r]] = [arr[r], arr[l]]
            l++
            r--
        }
    }

    let dummy = new ListNode(-1)
    temp = dummy

    for(let num of arr){
        let node = new ListNode(num)
        if(!dummy.next){
            dummy.next = node
        }else{
            temp.next = node
        }

        temp = temp.next
    }

    return dummy.next
};