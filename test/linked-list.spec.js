import { LinkedList, DoublyLinkedList } from '../ds/linked-list';

const linkedList = new LinkedList();

test('LinkedList insert', () => {
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    
    expect(linkedList.head.data).toBe(3);
    expect(linkedList.head.next.data).toBe(2);
    expect(linkedList.head.next.next.data).toBe(1);
});


test('LinkedList delete', () => {
    linkedList.delete(1);    
    linkedList.delete(2);    
    linkedList.delete(3);    
    
    expect(linkedList.isEmpty()).toBeTruthy();
});


test('LinkedList find', () => {
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    
    expect(linkedList.find(1)).toBeTruthy();
    expect(linkedList.find(2)).toBeTruthy();
    expect(linkedList.find(3)).toBeTruthy();
    expect(linkedList.find(4)).toBeFalsy();
});


const doublyLinkedList = new DoublyLinkedList();

test('DoublyLinkedList insert', () => {
    doublyLinkedList.insertAtHead(1);
    doublyLinkedList.insertAtHead(2);
    doublyLinkedList.insertAtHead(3);
    
    expect(doublyLinkedList.head.data).toBe(3);
    expect(doublyLinkedList.head.next.data).toBe(2);
    expect(doublyLinkedList.head.next.next.data).toBe(1);

    doublyLinkedList.insertAtTail(4);
    doublyLinkedList.insertAtTail(5);
    doublyLinkedList.insertAtTail(6);
    
    expect(doublyLinkedList.tail.data).toBe(6);
    expect(doublyLinkedList.tail.prev.data).toBe(5);
    expect(doublyLinkedList.tail.prev.prev.data).toBe(4);
});

test('DoublyLinkedList delete', () => {
    doublyLinkedList.deleteAtHead();
    doublyLinkedList.deleteAtHead();
    doublyLinkedList.deleteAtHead();
    doublyLinkedList.deleteAtTail();
    doublyLinkedList.deleteAtTail();
    doublyLinkedList.deleteAtTail();
    
    expect(doublyLinkedList.isEmpty()).toBeTruthy();
});

test('DoublyLinkedList find', () => {
    doublyLinkedList.insertAtTail(1);
    doublyLinkedList.insertAtTail(2);
    doublyLinkedList.insertAtTail(3);

    expect(doublyLinkedList.findFromTail(1)).toBeTruthy();
    expect(doublyLinkedList.findFromTail(2)).toBeTruthy();
    expect(doublyLinkedList.findFromTail(3)).toBeTruthy();
    expect(doublyLinkedList.findFromTail(10)).toBeFalsy();
});