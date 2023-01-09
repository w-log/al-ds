import { intersectSet, isSuperset, unionSet, differenceSet } from '../ds/set';

test('intersectSet', () => {
    expect(
        intersectSet(new Set([1, 2, 3]), new Set([1, 2, 4]))
    )
    .toEqual(new Set([1, 2]));
});

test('isSuperset', () => {
    expect(isSuperset(new Set([1, 2, 3, 4]), new Set([1, 2]))).toBeTruthy();
    expect(isSuperset(new Set([1, 2]), new Set([5]))).toBeFalsy();
});

test('unionSet', () => {
    expect(unionSet(new Set([1, 2, 3]), new Set([1, 2, 3, 4]))).toEqual(new Set([1, 2, 3, 4]));
    expect(unionSet(new Set([1, 2, 5]), new Set([1, 2, 6]))).toEqual(new Set([1, 2, 5, 6]));
});

test('differenceSet', () => {
    expect(differenceSet(new Set([1, 2, 3, 4]), new Set([2, 3]))).toEqual(new Set([1, 4]));
});