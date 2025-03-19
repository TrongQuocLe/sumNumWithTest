// https://www.youtube.com/watch?v=FgnxcUQ5vho

const sumNumbers = require('../src/sumNum');

describe('sumNumbers', () => {
    test('should return 0 for empty array', () => {
        expect(sumNumbers([])).toBe(0);
    });

    test('should sum single number correctly', () => {
        expect(sumNumbers([5])).toBe(5);
    });

    test('should sum positive numbers correctly', () => {
        expect(sumNumbers([1, 2, 3, 4])).toBe(10);
    });

    test('should sum negative numbers correctly', () => {
        expect(sumNumbers([-1, -2, -3])).toBe(-6);
    });

    test('should sum mixed positive and negative numbers', () => {
        expect(sumNumbers([1, -2, 3, -4])).toBe(-2);
    });

    test('should throw TypeError for string input', () => {
        expect(() => sumNumbers([1, "2", 3])).toThrow(TypeError);
        expect(() => sumNumbers([1, "2", 3])).toThrow(
            'All elements must be integers, found string'
        );
    });

    test('should throw TypeError for float input', () => {
        expect(() => sumNumbers([1, 2.5, 3])).toThrow(TypeError);
        expect(() => sumNumbers([1, 2.5, 3])).toThrow(
            'All elements must be integers, found number'
        );
    });

    test('should throw TypeError for null input', () => {
        expect(() => sumNumbers([1, null, 3])).toThrow(TypeError);
        expect(() => sumNumbers([1, null, 3])).toThrow(
            'All elements must be integers, found object'
        );
    });

    test('should throw TypeError for undefined input', () => {
        expect(() => sumNumbers([1, undefined, 3])).toThrow(TypeError);
        expect(() => sumNumbers([1, undefined, 3])).toThrow(
            'All elements must be integers, found undefined'
        );
    });

    test('should throw TypeError if not array', () => {
        expect(() => sumNumbers(123)).toThrow(TypeError);
        expect(() => sumNumbers(123)).toThrow('Input must be an array');
    }
    );
});