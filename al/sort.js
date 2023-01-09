/**
 * @author 김태웅
 * @description 정렬 - 자료구조(일반적으로 배열)을 특정 우선순위에 따라서 순서대로 재배치하는 알고리즘에 종류이고,
 *              일반적으로 컴퓨터 과학 분야에서 가장 중요한 주제중에 하나다.
 */


/**
 * 배열 원소교환 헬퍼함수
 * @param {Array} arr 
 * @param {number} idx1 
 * @param {number} idx2 
 */
const swap = (arr, idx1, idx2) => {
    const tmp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tmp;
}


/**
 * 거품 정렬 함수
 * @param {number[]} arr
 * @return {number[]} 
 */
export const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] < arr[j]) {
                swap(arr, i, j);
            }
        }
    }
    return arr;
}

/**
 * 선택 정렬 함수
 * @param {number[]} arr 
 * @return {number[]}
 */
export const selectionSort = (arr) => {
    let len = arr.length,
        min;
    
    for(let i = 0; i < len; i++) {
        min = i;
        // 더 작은 항목이 있는지 i 이후의 원소들을 순회하고 더 작은 항목이 있으면 min 값을 해당 인덱스로 교체함
        for(let j = i + 1; j < len; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }

        if(i !== min) {
            swap(arr, i, min);
        }
    }

    return arr;
}


/**
 * 삽입 정렬 함수
 * @param {number[]} arr 
 * @return {number[]}
 */
export const insertSort = (arr) => {
    const len = arr.length;
    let value, j;

    for(let i = 0; i < len; i++) {
        // value 값을 캐시        
        value = arr[i];

        // 반복적으로 i - 1 원소가 존재하고 value보다 크면 해당 원소를 해당원소의 다음 원소의 자리로 위치를 변경함
        for(j = i - 1; i > -1 && arr[j] > value; j--) {
            arr[j + 1] = arr[j];
        }
        // 마지막에 밀린 원소순서에 value를 할당함
        arr[j + 1] = value;
    }
    return arr;
}


/**
 * 빠른 정렬(퀵소트) 함수
 * @param {number[]} arr 
 * @return {number[]}
 */
export const quickSort = (arr) => {
    const partition = (arr, left, right) => {
        const pivot = Math.floor((right + left) / 2);
        const pivotValue = arr[Math.floor((right + left) / 2)];
        swap(arr, pivot, right);
        let storeIndex = left;
        for(let i = left; i < right; i++) {
            if(arr[i] <= pivotValue) {
                swap(arr,storeIndex, i);
                storeIndex++;
            }
        }
        swap(arr, right, storeIndex);
        return storeIndex;
    }
    const recusive = (arr, left, right) => {
        if(left >= right) {
            return;
        }

        const index = partition(arr, left, right);
        recusive(arr, left, index - 1);
        recusive(arr, index + 1, right);

        return arr;
    }

    return recusive(arr, 0, arr.length - 1);
}

/**
 * 빠른 선택 함수
 * @param {number[]} arr 
 * @param {number} k 찾으려는 배열된 항목의 k번째 수 
 * @return {number}
 */
export const quickSelect = (arr, k) => {
    const partition = (arr, left, right) => {
        const pivot = Math.floor((right + left) / 2);
        const pivotValue = arr[Math.floor((right + left) / 2)];
        swap(arr, pivot, right);
        let storeIndex = left;
        for(let i = left; i < right; i++) {
            if(arr[i] <= pivotValue) {
                swap(arr,storeIndex, i);
                storeIndex++;
            }
        }
        swap(arr, right, storeIndex);
        return storeIndex;
    }
    const recusive = (arr, left, right, k) => {
        let pivot = partition(arr, left, right);

        if(k < pivot) {
            return recusive(arr, left, pivot - 1, k);
        }else if(k > pivot) {
            return recusive(arr, pivot + 1, right, k);
        }

        return arr[k];
    }

    return recusive(arr, 0, arr.length - 1, k);
}


/**
 * 병합 정렬 함수
 * @param {number[]} arr
 * @return {number[]} 
 */
export const mergeSort = (arr) => {

    const merge = (leftArr, rightArr) => {
        const results = [];
        let leftIndex = 0, rightIndex = 0;

        while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
            if(leftArr[leftIndex] < rightArr[rightIndex]) {
                results.push(leftArr[leftIndex++]);
            }else {
                results.push(rightArr[rightIndex++]);
            }
        }

        return results
            .concat(leftArr.slice(leftIndex))
            .concat(rightArr.slice(rightIndex));
    }

    if(arr.length < 2) {
        return arr.slice();
    }

    const midIndex = Math.floor(arr.length / 2),
          leftArr = arr.slice(0, midIndex),
          rightArr = arr.slice(midIndex);
    
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

/**
 * 계수 정렬
 * @param {number[]} arr 
 * @param {number} max 촤대 계수
 * @return 
 */
export const countSort = (arr) => {
    const sorted = new Array(), countArr = [], len = arr.length;
        
    for(let i = 0; i < len; i++) {
        if(!countArr[arr[i]]) {
            countArr[arr[i]] = 1;
        }else {
            countArr[arr[i]]++;
        }
    }
    let prevIndex = -1;
    for(let i = 0; i < countArr.length; i++) {
        if(countArr[i] > 0) {
            countArr[i] += prevIndex > -1 ? countArr[prevIndex] : 0;
            prevIndex = i
        }
    }
    
    for(let i = arr.length - 1; i >= 0; i--) {
        sorted[--countArr[arr[i]]] = arr[i];
    }

    return sorted;
}