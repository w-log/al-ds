/**
 * @author 김태웅
 * @description 연결리스트는 각 노드가 다른 노드를 가르키면서 노드의 포인터로만 연결된 형태 구조를 가지며, 
 * 고정된 크기를 가지는 배열과 달리 연결리스트는 크기에 대한 제약이 없고 런타임에 메모리를 할당하거나 해제할 수 있는 동적인 자료 구조이다.
 */

const Link = class {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export const LinkedList = class {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(value) {
        if(this.head === null) {
            this.head = new Link(value);
        }else {
            const temp = this.head;
            this.head = new Link(value);
            this.head.next = temp;
        }
        this.size++;
    }

    delete(value) {
        let current = this.head, prev = null;
        while(current !== null) {
            if(current.data === value) {
                if(prev) prev.next = current.next;
                else this.head = current.next;
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
    }
    
    deleteAtHead() {
        return this.delete(this.head && this.head.data);
    }

    find(value) {
        let current = this.head;
        
        while(current) {
            if(current.data === value) return true;
            current = current.next;
        }

        return false;
    }

    isEmpty() {
        return this.size === 0;
    }
}


const DoublyLink = class {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


export const DoublyLinkedList = class {
    
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    insertAtHead(value) {
        const node = new DoublyLink(value);

        if(this.head === null) {
            this.head = node;
            this.tail = this.head;
        }else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.size++;
    }

    insertAtTail(value) {
        const node = new DoublyLink(value);
        
        if(this.tail === null) {
            this.tail = node;
            this.head = this.tail;
        }else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    deleteAtHead() {
        if(this.head === null) return null;
        
        const deleteData = this.head.data;

        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.size--;

        return deleteData;
    }

    deleteAtTail() {
        if(this.tail === null) return null;

        const deleteData = this.tail.data;
        
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null
        }else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.size--;

        return deleteData;
    }

    findFromHead(value) {
        let node = this.head;
        
        while(node) {
            if(node.data === value) return true;

            node = node.next;
         }

         return false;
    }

    findFromTail(value) {
        let node = this.tail;
        
        while(node) {
            if(node.data === value) return true;

            node = node.prev;
         }

         return false;
    }

    isEmpty() {
        return this.size === 0;
    }

}