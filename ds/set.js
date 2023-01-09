/**
 * @author 김태웅
 * @description set은 유한하고 구분되는 원소들의 그룹 - 중복 원소를 허용하지않고 유일한 항목 조회/삭제/추가에 대해서 상수시간(O(1))을 가진다.
 */
var set = new Set();

// set 원소들의 총 크기를 나타내는 속성
set.size;

// set 메모리에 원소를 추가
set.add(1);
set.add(2);
set.add(1); // 중복된 값은 다시 들어가지 않는다.

// set 원소들중 인수로 넘긴 값이 있는지 확인
set.has(1);
set.has(2);
set.has(3);

// set 원소 삭제
set.delete(1);
set.delete(2);


/**
 * 두개의 집합 자료구조를 받아서 교집합 반환함수
 * @param {Set} setA
 * @param {Set} setB
 * @return {Set}
 */
export const intersectSet = (setA, setB) => {
    const set = new Set();
    setA.forEach(elem => setB.has(elem) && set.add(elem));
    return set;
}


/**
 * 첫번째로 넘긴 자료구조가 두번째 자료구조의 원소들을 모두 포함하는지 여부 반환함수
 * @param {Set} baseSet 
 * @param {Set} compareSet 
 * @return {Boolean}
 */
export const isSuperset = (baseSet, compareSet) => {
    for(let elem of compareSet) {
        if(!baseSet.has(elem)) return false;
    }

    return true;
}

/**
 * set을 인수로 넘기면 합집합 반환함수
 * @param  {...Set} sets 
 */
export const unionSet = (...sets) => {
    const appendSet = new Set();
    sets.forEach(set => set.forEach(elem => appendSet.add(elem)));
    return appendSet;
}

/**
 * 집합A에 대한 집합B의 차집합을 반환(setA에는 있지만 setB에는 없는 원소)
 * @param {Set} setA 
 * @param {Set} setB 
 * @return {Set}
 */
export const differenceSet = (setA, setB) => {
    const diffSet = new Set(setA);

    for(let elem of setB) {
        if(diffSet.has(elem)) diffSet.delete(elem);
    }

    return diffSet;
}