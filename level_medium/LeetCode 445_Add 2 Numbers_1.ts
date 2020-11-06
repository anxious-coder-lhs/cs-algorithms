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
 * Solution uses O(n) space for each linked list to store the reverse items into a stack, so that the least
 * significant digit can be read first and so on. Alternatively, you can create another linked list in reverse
 * order to reverse it in place.
 * 
 * Time: O(n) for navigation (n max of all items in the linked lists)
 * Space: O(n) for storing all items in reverse apart from the final numbers.
 * 
 * @param l1 
 * @param l2 
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const l1Stack: number[] = createStack(l1);
    const l2Stack: number[] = createStack(l2);
    const result: number[] = [];
    let carry = 0;
    while(l1Stack.length > 0 || l2Stack.length > 0) {
        const sum = (l1Stack.pop() || 0) + (l2Stack.pop() || 0) + carry;
        carry = Math.floor(sum / 10);
        result.push(sum % 10);
    }
    
    if (carry > 0) result.push(carry);
    return stackToList(result);
};

function stackToList(result: number[]) {
    const head: ListNode = new ListNode(result.pop(), null);
    let curr = head;
    while(result.length > 0) {
        const item = result.pop();
        curr.next = new ListNode(item, null);
        curr = curr.next;
    }
    return head;
}

function createStack(l1: ListNode | null, stack: number[] = []): number[] {
    if (l1 === null) return stack
    stack.push(l1.val)
    return createStack(l1.next, stack)
}