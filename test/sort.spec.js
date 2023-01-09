import { bubbleSort, selectionSort, insertSort, quickSort, quickSelect, mergeSort, countSort } from '../al/sort';

test('bubbleSort', () => {
    expect(bubbleSort([3,1,5,6,4,2])).toEqual([1,2,3,4,5,6]);
});

test('selectionSort', () => {
    expect(selectionSort([3,1,5,6,4,2,9,6])).toEqual([1,2,3,4,5,6,6,9]);
});

test('insertSort', () => {
    expect(insertSort([3,1,5,6,4,2,9,6])).toEqual([1,2,3,4,5,6,6,9]);
});

test('quickSort', () => {
    expect(quickSort([6,1,23,4,2,3, 100])).toEqual([1,2,3,4,6,23, 100]);
});

test('quickSelect', () => {
    const testArr = [20, 5,2,6, 30,6,7,3]; 
    expect(quickSelect(testArr, 0)).toBe(2);
    expect(quickSelect(testArr, 1)).toBe(3);
    expect(quickSelect(testArr, 2)).toBe(5);
    expect(quickSelect(testArr, 3)).toBe(6);
    expect(quickSelect(testArr, 4)).toBe(6);
    expect(quickSelect(testArr, 5)).toBe(7);
    expect(quickSelect(testArr, 6)).toBe(20);
    expect(quickSelect(testArr, 7)).toBe(30);
});


test('mergeSort', () => {
    expect(mergeSort([6, 1, 23, 4, 2, 3])).toEqual([1, 2, 3, 4, 6, 23]);
    expect(mergeSort([1000, 2000, 2, 6, 8, 9999])).toEqual([2, 6, 8, 1000, 2000, 9999]);
});

test('countSort', () => {
    expect(countSort([6,1,23,2,3,2,1,2,2,3,3,1,123,123,4,2,3])).toEqual([1,1,1,2,2,2,2,2,3,3,3,3,4,6,23,123,123]);
});


