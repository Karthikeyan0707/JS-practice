//Merge Two Sorted Lists

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  // Create a dummy node to simplify the code.
  const dummy = new ListNode(-1);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Attach the remaining nodes, if any.
  if (list1) {
    current.next = list1;
  } else if (list2) {
    current.next = list2;
  }

  return dummy.next;
}

// Helper function to create a linked list from an array.
function createLinkedList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// Helper function to convert a linked list to an array for testing.
function linkedListToArray(head) {
  const result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// Example usage:
const list1 = createLinkedList([1, 2, 4]);
const list2 = createLinkedList([1, 3, 4]);
const mergedList = mergeTwoLists(list1, list2);
console.log(linkedListToArray(mergedList)); // Output: [1, 1, 2, 3, 4, 4]
