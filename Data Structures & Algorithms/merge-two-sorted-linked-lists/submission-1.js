/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode()
        let tail = dummy;
        let l1 = list1
        let l2 = list2 
        
        while(l1 && l2){
            if(l1.val <= l2.val){
                tail.next = l1
                l1 = l1.next
            } else if (l1.val > l2.val){
                 tail.next = l2
                 l2 = l2.next
            }
            tail = tail.next
        }
        
        tail.next = l1 || l2;
        
        return dummy.next
    }
}


/**
 * [1,2,3]
 * [1,4,5]
 * [1,1,2,3,4,5]
 */
