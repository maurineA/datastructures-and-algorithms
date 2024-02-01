// // Linked Lists
// class Node {
//   constructor(data) {
//       this.data = data;
//       this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//       this.head = null;
//   }
// }

// const singlyLinkedList = new SinglyLinkedList();
// singlyLinkedList.head = new Node(1);
// const secondNode = new Node(2);
// const thirdNode = new Node(3);

// singlyLinkedList.head.next = secondNode;
// secondNode.next = thirdNode;
// Resulting linked list: 1 -> 2 -> 3

// class DoublyNode {
//   constructor(data) {
//       this.data = data;
//       this.next = null;
//       this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//       this.head = null;
//   }
// }
// const doublyLinkedList = new DoublyLinkedList();
// const firstNode = new DoublyNode(1);
// const secondNode = new DoublyNode(2);
// const thirdNode = new DoublyNode(3);

// doublyLinkedList.head = firstNode;
// firstNode.next = secondNode;
// secondNode.prev = firstNode;
// secondNode.next = thirdNode;
// thirdNode.prev = secondNode;
// Resulting doubly linked list: 1 <-> 2 <-> 3

// class CircularNode {
//   constructor(data) {
//       this.data = data;
//       this.next = null;
//   }
// }

// class CircularLinkedList {
//   constructor() {
//       this.head = null;
//   }
// }

// const circularLinkedList = new CircularLinkedList();
// const firstNode = new CircularNode(1);
// const secondNode = new CircularNode(2);
// const thirdNode = new CircularNode(3);

// circularLinkedList.head = firstNode;
// firstNode.next = secondNode;
// secondNode.next = thirdNode;
// thirdNode.next = circularLinkedList.head; // Connecting back to the head
// // Resulting circular linked list: 1 -> 2 -> 3 -> 1