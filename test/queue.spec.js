/**
 * @TODO update Coverage
 */
import { Queue } from '../ds/stack-queue';

const queue = new Queue();

test('enqueue', () => {
    expect(queue.enqueue(1)).toBe(1);
    expect(queue.enqueue(2)).toBe(2);
    expect(queue.enqueue(3)).toBe(3);
});

test('peek & dequeue', () => {     
    expect(queue.peek()).toBe(1);
    expect(queue.dequeue(1)).toBe(1);
    expect(queue.peek()).toBe(2);
    expect(queue.dequeue()).toBe(2);
    expect(queue.peek()).toBe(3)
    expect(queue.dequeue()).toBe(3);
});


test('isEmpty', () => {
    queue.enqueue(1);
    expect(queue.isEmpty()).toBeFalsy();
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
});