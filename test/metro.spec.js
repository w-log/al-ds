
import { solution } from '../al/metro';


test('print', () => {
    expect(solution(['1 2 3 4 5 6 7 8 9 10', '2 8'], 1, 10)).toBe(0);
    expect(solution(['1 2 3 4 5 6 7 8', '2 11', '0 11 10', '3 17 19 12 13 9 14 15 10', '20 2 21'], 1, 9)).toBe(1);    
    expect(solution(['0 1 2 3 4', '1 12 13 14', '14 15'], 2, 15)).toBe(2);    
    expect(solution(['1 2 3 4', '4 5 6 7', '7 8 10', '10 11'], 2, 11)).toBe(3);
})