class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        // const holdingPointer = this.first; //if this is not referenced, garbage collector lang like JS will delete it in memory
        this.first = this.first.next;
        this.length--;
        return this
    }
    isEmpty() {
        if (!this.first) {
            return true;
        } else return false
    }
}

const myQueue = new Queue();
myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Samir')
myQueue.peek();
myQueue.dequeue();
myQueue.isEmpty();
// myQueue.peek();

// Joy
// Matt
// Pavel
// Samir