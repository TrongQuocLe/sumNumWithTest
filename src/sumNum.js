// a function/method that accepts a list of integers as a parameter and returns the sum of the numbers in that list
function sumNum(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError('Input must be an array');
    }
    if (numbers.length === 0) {
        return 0;
    }
    for (let num of numbers) {
        if (!Number.isInteger(num)) {
            throw new TypeError(`All elements must be integers, found ${typeof num}`);
        }
    }
    return numbers.reduce((sum, num) => sum + num, 0);
}
module.exports = sumNum;