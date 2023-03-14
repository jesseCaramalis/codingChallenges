// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.


// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 
// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

// Answer
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(-1);   // create a dummy node to hold the head of the merged list
    let tail = dummy;               // create a tail pointer that initially points to the dummy node
    
    while (list1 && list2) {        // loop while both lists are not empty
        if (list1.val < list2.val) {    // if the first node in list1 is smaller, append it to the merged list
            tail.next = list1;
            list1 = list1.next;
        } else {                        // otherwise, append the first node in list2 to the merged list
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;           // move the tail pointer to the end of the merged list
    }
    
    tail.next = list1 || list2;     // append the remaining nodes (if any) to the end of the merged list
    
    return dummy.next;              // return the head of the merged list (i.e., the node after the dummy node)
}