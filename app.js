/*q1 */
// function reverseArray(arr){
//     let stack = [];

//     for (let i = 0; i < arr.length; i++){
//         stack.push(arr[i]);
//     }

//     for(let i = 0; i<arr.length; i++){
//         arr[i] = stack.pop();
//     }
// }
// const arr = [10, 20, 30, 40, 50];
// console.log("Original array:", arr);
// reverseArray(arr);
// console.log("Reversed array:",arr)

/*q2*/

// class Queue {
//     constructor() {
//         this.stack1 = [];
//         this.stack2 = [];
//     }

//     enqueue(element) {
//         this.stack1.push(element);
//     }

//     dequeue() {
//         if (this.stack2.length === 0) {
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }
//         if (this.stack2.length === 0) {
//             throw new Error("Queue is empty");
//         }
//         return this.stack2.pop();
//     }

//     isEmpty() {
//         return this.stack1.length === 0 && this.stack2.length === 0;
//     }

//     size() {
//         return this.stack1.length + this.stack2.length;
//     }

//     peek() {
//         if (this.stack2.length === 0) {
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop());
//             }
//         }
//         if (this.stack2.length === 0) {
//             throw new Error("Queue is empty");
//         }
//         return this.stack2[this.stack2.length - 1];
//     }
// }

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log("Dequeued:", queue.dequeue());
// console.log("Dequeued:", queue.dequeue());
// queue.enqueue(4);
// console.log("Dequeued:", queue.dequeue()); 
// console.log("Dequeued:", queue.dequeue()); 



/*q3 */

// function sumArray(arr) {
//     if (arr.length === 0) {
//         return 0;
//     }
//     return arr[0] + sumArray(arr.slice(1));/*تكرار */
// }
// const arr = [1, 2, 3, 4, 5];
// console.log("The sum of the elements of the matrix:", sumArray(arr));




/*q4*/

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while (current.next) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }

//     printList() {
//         let current = this.head;
//         while (current) {
//             console.log(current.value);
//             current = current.next;
//         }
//     }
// }


// function reverseLinkedList(linkedList) {
//     let previous = null;
//     let current = linkedList.head;
//     let next = null;

//     while (current !== null) {
//         next = current.next;
//         current.next = previous;
//         previous = current;
//         current = next;
//     }
//     linkedList.head = previous;
// }

// const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);

// console.log("Original array:");
// list.printList();

// reverseLinkedList(list);

// console.log("Reversed array:");
// list.printList();



/*q5 */


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}



function deleteMiddleNode(linkedList) {
    if (!linkedList.head || !linkedList.head.next) {
        return null;
    }

    let slow = linkedList.head;
    let fast = linkedList.head;
    let prev = null;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    prev.next = slow.next;

    return slow;
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original array:");
list.printList();

const deletedNode = deleteMiddleNode(list);

console.log("List after deleting:");
list.printList();

if (deletedNode) {
    console.log("Deleted list:", deletedNode.value);
} else {
    console.log("Cannot delete middle node:");
}
