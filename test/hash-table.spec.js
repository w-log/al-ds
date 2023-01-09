import { LinearHashTable, QuadraticHashTable, DoubleHashTable } from '../ds/hash-table';

test('Linear Probing HashTable', () => {
    const linearHashTable = new LinearHashTable(13);

    linearHashTable.put(7, 'hi');
    linearHashTable.put(20, 'hello');
    linearHashTable.put(33, 'sunny');
    linearHashTable.put(46, 'weather');
    linearHashTable.put(59, 'wow');
    linearHashTable.put(72, 'forty');
    linearHashTable.put(85, 'happy');
    linearHashTable.put(98, 'sad');
    
    expect(linearHashTable.get(7)).toBe('hi');
    expect(linearHashTable.get(20)).toBe('hello');
    expect(linearHashTable.get(33)).toBe('sunny');
    expect(linearHashTable.get(46)).toBe('weather');
    expect(linearHashTable.get(59)).toBe('wow');
    expect(linearHashTable.get(72)).toBe('forty');    
    expect(linearHashTable.get(85)).toBe('happy');    
    expect(linearHashTable.get(98)).toBe('sad');    
    
});

test('Quadratic Probing HashTable', () => {
    const quadraticHashTable = new QuadraticHashTable(13);

    quadraticHashTable.put(7, 'hi');
    quadraticHashTable.put(20, 'hello');
    quadraticHashTable.put(33, 'sunny');
    quadraticHashTable.put(46, 'weather');
    quadraticHashTable.put(59, 'wow');
    quadraticHashTable.put(72, 'forty');
    quadraticHashTable.put(85, 'happy');
    quadraticHashTable.put(98, 'sad');
    
    expect(quadraticHashTable.get(7)).toBe('hi');
    expect(quadraticHashTable.get(20)).toBe('hello');
    expect(quadraticHashTable.get(33)).toBe('sunny');
    expect(quadraticHashTable.get(46)).toBe('weather');
    expect(quadraticHashTable.get(59)).toBe('wow');
    expect(quadraticHashTable.get(72)).toBe('forty');    
    expect(quadraticHashTable.get(85)).toBe('happy');    
    expect(quadraticHashTable.get(98)).toBe('sad');    
});

test('Double Hashing with Linear Probing HashTable', () => {
    const doubleHashTable = new DoubleHashTable(13);

    doubleHashTable.put(7, 'hi');
    doubleHashTable.put(20, 'hello');
    doubleHashTable.put(33, 'sunny');
    doubleHashTable.put(46, 'weather');
    doubleHashTable.put(59, 'wow');
    doubleHashTable.put(72, 'forty');
    doubleHashTable.put(85, 'happy');
    doubleHashTable.put(98, 'sad');
    
    expect(doubleHashTable.get(7)).toBe('hi');
    expect(doubleHashTable.get(20)).toBe('hello');
    expect(doubleHashTable.get(33)).toBe('sunny');
    expect(doubleHashTable.get(46)).toBe('weather');
    expect(doubleHashTable.get(59)).toBe('wow');
    expect(doubleHashTable.get(72)).toBe('forty');    
    expect(doubleHashTable.get(85)).toBe('happy');    
    expect(doubleHashTable.get(98)).toBe('sad');    
});