class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top
    }
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        // const holdingPointer = this.top; //if this is not referenced, garbage collector lang like JS will delete it in memory
        this.top = this.top.next;
        this.length--;
        return this
        //isEmpty
    }
    isEmpty() {
        if (!this.top) {
            return true;
        } else {
            return false;
        }
    }
}

const myStack = new Stack();

myStack.push('google')
myStack.push('udemy')
myStack.push('discord')
myStack.peek();
myStack.pop();
myStack.pop();
myStack.isEmpty();

//Discord
//Udemy
//google