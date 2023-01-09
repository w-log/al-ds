/**
 * @author 김태웅
 * @description 검색 - 자료구조내의 특정 항목을 찾는 알고리즘을 의미하고 일반적인 배열형태의 자료구조 검색을 수행할떄 
 *              배열의 정렬 여부에 따라서 선형검색, 이진 검색 두가지 주요 기법으로 나뉜다.
 *              선형검색은 정렬된 자료와 정렬되지 않은 자료 모두에서 사용가능하고 이진 검색은 정렬된 자료에 대해 사용한다.
 *              선형 검색의 시간복잡도는 일반적으로 이진 검색에 비해서 높다.
 */


/**
 * 일반적인 선형검색 함수
 * @param {Array} arr 
 * @param {Number} n 
 * @return {Number}
 */
export const linearSearch = (arr, n) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === n) return i;
    }

    return -1;
}


/**
 * 일반적인 이진검색 함수
 * @param {Array} arr 
 * @param {Number} n 
 * @return {Number}
 */
export const binarySearch = (arr, n) => {
    let lowIdx = 0, highIdx = arr.length - 1, midIndex = -1;

    while(lowIdx <= highIdx) {
        midIndex = Math.floor((lowIdx + highIdx) / 2);
        
        if(midIndex === n) {
            return midIndex
        }
        // 검색 값이 중간값보다 크다면 lowIdx 값을 중간값 + 1을 할당함
        if(n > arr[midIndex]) {
            lowIdx = midIndex + 1;
        }
        // 검색 값이 중간값보다 작으면 highIdx 값을 중간값 - 1을 할당함
        else {
            highIdx = midIndex - 1;
        }
    }

    return -1;
}