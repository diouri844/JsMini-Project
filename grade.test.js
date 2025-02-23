const { calculateAverage, findMinimum, findMaximum, calculateClassAverage, displayOverAllClass } = require('./grade');
const studentData = require('../data/student');

describe('Grade Module Tests', () => {
    test('calculateAverage should return the correct average', () => {
        const grades = [90, 80, 70, 60];
        const result = calculateAverage(grades);
        expect(result).toBe(75);
    });

    test('findMinimum should return the minimum grade', () => {
        const grades = [90, 80, 70, 60];
        const result = findMinimum(grades);
        expect(result).toBe(60);
    });

    test('findMaximum should return the maximum grade', () => {
        const grades = [90, 80, 70, 60];
        const result = findMaximum(grades);
        expect(result).toBe(90);
    });

    test('calculateClassAverage should return the correct class average', () => {
        const result = calculateClassAverage(studentData);
        expect(result).toBeCloseTo(75); // Adjust the expected value based on your student data
    });

    test('displayOverAllClass should return the correct overall class performance', () => {
        const result = displayOverAllClass(studentData);
        expect(result).toEqual({
            average: expect.any(Number),
            minimum: expect.any(Number),
            maximum: expect.any(Number)
        });
    });
});