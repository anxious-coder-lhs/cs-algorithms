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
  * Leet Code 445.
  * 
  * Solution uses an O(1) space aimed to reduce the required space for reversal or virtual reversal. It rather uses
  * the length of the linked list to identify when a padding can be used and when can it be skipped. This step is done
  * without the help of additional carry, since carry needs to be added in the reverse order.
  * 
  * To adjust the carry pointer, we need to reverse the list, adjust the carry and reverse again.
  * 
  * O(n) time for run-time, O(1) for space.
  * 
  * @param l1 
  * @param l2 
  */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    
    // Finding the length of each linked list.
    let l1Length = length(l1);
    let l2Length = length(l2);
    
    let resultCurr: ListNode | null = new ListNode(0, null), resultHead = resultCurr, lastCurr: ListNode | null = resultCurr;
    
    // Adding items with prefixes attached, not using the carry.
    while(l1Length >= 0 && l2Length >= 0 && l1 !== null && l2 !== null) {
        if (l1Length > l2Length) {
            // L1 has more items than l2, lets pull from l1 and add 0 for l2.
            resultCurr.val = l1.val;
            l1 = l1.next;
            resultCurr.next = new ListNode(0, null)    
            l1Length--;
        } else if (l1Length < l2Length) {
            // L2 has more items than l1, lets pull from l2 and add 0 for l1.
            resultCurr.val = l2.val;
            l2 = l2.next;
            resultCurr.next = new ListNode(0, null)
            l2Length--
        } else {
            // Both have equal items, lets add.
            resultCurr.val = l2.val + l1.val;
            l2 = l2.next; l1 = l1.next;
            resultCurr.next = new ListNode(0, null)
            l2Length--; l1Length--;
        }

        lastCurr = resultCurr;
        resultCurr = resultCurr.next;
    }
    lastCurr.next = null;
    
    let newHead = reverseLinkedList(resultHead);
    
    // Adjust the carry now.
    adjustCarry(newHead)
    
    // Reverse the list and return.
    newHead = reverseLinkedList(newHead);
    
    return newHead;
};

function adjustCarry(list: ListNode | null) {
    let curr = list, last = null, carry = 0;
    while(curr !== null) {
        const val = curr.val + carry;
        curr.val = val % 10;
        carry = Math.floor(val / 10)
        last = curr;
        curr = curr.next;
    }
    
    // Add the pending carry to a new node.
    if (carry > 0 && last !== null) {
        last.next = new ListNode(carry, null);
    }
}

function length(l1: ListNode | null) {
    let length = 0, curr = l1;
    while(curr !== null) {
        length++
        curr = curr.next;
    }
    return length;
}

function reverseLinkedList(l1: ListNode | null) {
    let curr = l1, last: ListNode | null = null;
    while(curr !== null) {
        const next = curr.next;
        curr.next = last;
        last = curr;
        curr = next;
    }
    return last;
}