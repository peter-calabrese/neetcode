class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
         if (!this.head) return -1;
        if (index === 0) {
            return this.head.val;
        }
        let curr = this.head;
        let position = 0;

        while (curr && position < index) {
            curr = curr.next;
            position++;
        }

        if (curr === null) return -1;

        return curr.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let node = new Node(val, this.head);
        if (this.tail === null) this.tail = node;
        this.head = node;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let node = new Node(val, null);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (!this.head) return false;
        if (index === 0) {
            this.head = this.head.next;
            if (!this.head) this.tail = null;
            return true;
        }

        let curr = this.head;
        let prev = curr;
        let position = 0;

        while (curr && position < index) {
            prev = curr;
            curr = curr.next;
            position++;
        }
        if(!curr) return false
        if (curr.next === null) this.tail = prev
        prev.next = curr.next;
        
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let curr = this.head;
        let values = [];
        while (curr) {
            values.push(curr.val);
            curr = curr.next;
        }
        return values;
    }
}
