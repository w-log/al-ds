/**
 * 
 * @author 김태웅
 * @description 해시테이블 - 고정된 크기의 자료 구조로 처음에 크기가 정해지고, 해싱이라는 인덱스 기법을 기반으로 key,value 구조를 가진다.
 *              해시테이블에는 put, get 두 가지 주요 메소드가 존재하는데 조회, 삽입 시간복잡도는 O(1) 상수시간내에 이뤄지는 특징을 가진다.
 */

const HashTable = class {
    
    constructor(size) {
        this.size = size;
        this._keys = this._initArray();
        this._values = this._initArray();
        this._limit = 0;
    }

    _initArray() {
        return new Array(this.size);
    }
    
    _hash(key) {
        if(!Number.isInteger(key)) throw 'must be int';
        return key % this.size;
    }

    put(key, value) {
        throw 'overide only';
    }

    get(key) {
        throw 'overide only';
    }
}


export const LinearHashTable = class extends HashTable {
    put(key, value) {
        if(this._limit >= this.size) throw 'hash table is full';

        let hashedIndex = this._hash(key);


        // 선형 탐사
        while(this._keys[hashedIndex] !== undefined) {
            hashedIndex = ++hashedIndex % this.size;
        }


        this._keys[hashedIndex] = key;
        this._values[hashedIndex] = value;
        this._limit++;
    }
    
    get(key) {
        let hashedIndex = this._hash(key);

        while(this._keys[hashedIndex] !== key && hashedIndex <= this.size) {
            hashedIndex = ++hashedIndex % this.size;
        }

        return this._values[hashedIndex];
    }
}

export const QuadraticHashTable = class extends HashTable {
    put(key, value) {
        if(this._limit >= this.size) throw 'hash table is full';

        let hashedIndex = this._hash(key),
            squareIndex = 1;


        
        /**
         * 이차 탐사
         * @TODO while 문 탈출조건 개선필요
         * squareIndex가 this.size 이상값이라면 이미 해시테이블 크기 이상으로 해싱을 반복했기 때문에 this.size 보다 크다면 해당키는 없는 키가 된다.
         */
        while(this._keys[hashedIndex] !== undefined) {
            hashedIndex += Math.pow(squareIndex++, 2);
            hashedIndex = hashedIndex % this.size;
        }


        this._keys[hashedIndex] = key;
        this._values[hashedIndex] = value;
        this._limit++;
    }
    
    get(key) {
        let hashedIndex = this._hash(key),
            squareIndex = 1;

        while(this._keys[hashedIndex] !== key && squareIndex <= this.size) {
            hashedIndex += Math.pow(squareIndex++, 2)
            hashedIndex = hashedIndex % this.size;
        }
        
        return this._values[hashedIndex % this.size];
    }
}


export const DoubleHashTable = class extends LinearHashTable {
    _hash(key) {
        if(!Number.isInteger(key)) throw 'must be int';
        return this._secondHash(key);
    }

    _secondHash(key) {
        const R = this.size - 2;
        return R - key % R;
    }
}