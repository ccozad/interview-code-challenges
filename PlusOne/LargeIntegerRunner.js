const LargeInteger = require('./LargeInteger');

const testCases = [
    [1, 2, 3],
    [4, 3, 2, 1],
    [9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 9 , 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
];

const expectedResults = [
    [1, 2, 4],
    [4, 3, 2, 2],
    [1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const runTests = () => {
    testCases.forEach((testCase, index) => {
        const result = LargeInteger.plusOne(testCase);
        const expected = expectedResults[index];
        console.log(`Test Case ${index + 1}`);
        console.log(`Input: ${testCase}`);
        console.log(`Expected: ${expected}`);
        console.log(`Result: ${result}`);
        console.log(`Pass: ${expected.join('') === result.join('')}`);
        console.log();
    });
}

runTests();