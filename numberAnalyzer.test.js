// numberAnalyzer.test.js

const  analyzeNumbers = require( './numberAnalyzer');

test('analyzes an array of numbers correctly', () => {
    const numbers = [12, 45, 67, 89, 34, 56, 78, 90, 23, 43];
    const result = analyzeNumbers(numbers);

    // Test sum
    expect(result.sum).toBe(537);
    
    // Test average
    expect(result.average).toBe(53.7);

    // Test largest number
    expect(result.largest).toBe(90);

    // Test smallest number
    expect(result.smallest).toBe(12);

    // Test even count
    expect(result.evenCount).toBe(6);

    // Test odd count
    expect(result.oddCount).toBe(4);
});

test('handles an empty array', () => {
    const numbers = [];
    const result = analyzeNumbers(numbers);

    // Test sum
    expect(result.sum).toBe(0);

    // Test average
    expect(result.average).toBeNaN(); // Average should be NaN for empty array

    // Test largest and smallest
    expect(result.largest).toBeUndefined(); // No largest number in empty array
    expect(result.smallest).toBeUndefined(); // No smallest number in empty array

    // Test even and odd counts
    expect(result.evenCount).toBe(0);
    expect(result.oddCount).toBe(0);
});

test('handles an array with one number', () => {
    const numbers = [5];
    const result = analyzeNumbers(numbers);

    // Test sum
    expect(result.sum).toBe(5);

    // Test average
    expect(result.average).toBe(5);

    // Test largest and smallest
    expect(result.largest).toBe(5);
    expect(result.smallest).toBe(5);

    // Test even and odd counts
    expect(result.evenCount).toBe(0);
    expect(result.oddCount).toBe(1);
});