/**
 * @author 김태웅
 * @description 스택과 큐는 다양한 용도로 사용 할 수 있는 자료구조로 다른 더 복잡한 자료 구조 구현에 널리 사용한다.
 * 스택은 마지막에 삽입된 항목만을 제거하고 접근할 수 있는 후입선출 구조를 가지고
 * 큐는 반대로 맨 처음 삽입된 항목만을 제거하고 접근할 수 있는 선입선출 구조를 가진다.
 */


export const Stack = class {
    constructor(arr) {
        this.arr = Array.isArray(arr) ? arr : [];
    }

    getBuffer() {
        return this.arr.slice();
    }

    peek() {
        return this.arr[this.arr.length - 1];
    }

    push(elem) {
        return this.arr.push(elem);
    }

    pop() {
        return this.arr.pop();
    }

    isEmpty() {
        return this.arr.length === 0;
    }

    size() {
        return this.arr.length;
    }

    search(elem) {
        const stack = new Stack(this.getBuffer());

        while(!stack.isEmpty()) {
            if(stack.pop() === elem) {
                return true;
            } 
        }

        return false;
    }
}

export const Queue = class {
    constructor(arr) {
        this.arr = Array.isArray(arr) ? arr : [];
    }

    getBuffer() {
        return this.arr.slice();
    }

    peek() {
        return this.arr[0];
    }

    enqueue(elem) {
        return this.arr.push(elem);
    }

    dequeue() {
        return this.arr.shift();
    }

    isEmpty() {
        return this.arr.length === 0;
    }

    size() {
        return this.arr.length;
    }

    search(elem) {
        const bufferQueue = new Queue(this.getBuffer());

        while(!bufferQueue.isEmpty()) {
            if(bufferQueue.dequeue === elem) {
                return true;
            }
        }

        return false;
    }
}