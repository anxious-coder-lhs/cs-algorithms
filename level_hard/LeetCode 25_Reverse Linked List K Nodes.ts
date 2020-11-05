/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 /**
  * Problem: Leet Code 25, Reverse Linked List K Nodes at a time.
  * Solution: Uses an iterative approach to reverse linked list. Uses a modular function which can reverse the k nodes
  * using an iterative approach. This approach uses last, curr and next pointer to keep on updating the pointers
  * as we navigate. Additionally, it returns the new head, tail and next pointer in order to continue further. As it iterates,
  * it just needs to modify the pointers along the way.
  * 
  * time: O(n) as all nodes need one traversal, O(1) space.
  * 
  * @param head 
  * @param k 
  */
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    
    if (head === null) return null;
    
    const length = getLength(head)
    let next: ListNode | null = head, lastTail: ListNode | null = head;
    for (let group = k; group <= length && next !== null; group += k) {
        
        // Reverse the subgroup, getting the group head and tail
        const {groupHead, groupTail, groupNext} = reverseGroup(next, k);
        
        // Adjust the head pointer of previous group or main head.
        if (group === k) head = groupHead;
        else if (lastTail !== null) lastTail.next = groupHead;
        
        // Update the last tail to allow future updates.
        lastTail = groupTail;
        next = groupNext;
    }
    
    // Point for pending items
    if (lastTail !== null)
        lastTail.next = next;
    
    return head;
};

function reverseGroup(head: ListNode | null, k: number): {
    groupHead: ListNode | null,
    groupTail: ListNode | null,
    groupNext: ListNode | null
} {
    
    let curr = head, last = null, next = null, count = 0;
    while (count < k && curr !== null) {
        next = curr.next
        curr.next = last;
        last = curr;
        curr = next;
        count++
    }
    
    return {
        groupHead: last,
        groupTail: head,
        groupNext: next
    }
}

function getLength(head: ListNode | null) {
    let curr = head, length = 0;
    while(curr !== null) {
        curr = curr.next;
        length++;
    }
    
    return length;
}