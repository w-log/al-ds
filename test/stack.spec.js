/**
 * @TODO update Coverage
 */
import { Stack } from '../ds/stack-queue';

const stack = new Stack();

test('push', () => {
    expect(stack.push(1)).toBe(1);
    expect(stack.push(2)).toBe(2);
    expect(stack.push(3)).toBe(3);
});

test('peek & pop', () => {
    expect(stack.peek()).toBe(3);
    expect(stack.pop()).toBe(3);
    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.peek()).toBe(1);
    expect(stack.pop()).toBe(1);
});

test('isEmpty', () => {
    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
});