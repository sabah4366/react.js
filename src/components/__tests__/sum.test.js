import { sum } from "../sum";

test('sum function should calculate the sum of two numbers', () => { 
    const result = sum(5 ,6);

    
    // assertion
    expect(result).toBe(11)
 })