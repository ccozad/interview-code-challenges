const TextChecker = require('./TextChecker');

const testCases = [
    ['anagram', 'nagaram', true],
    ['rat', 'car', false],
    ['listen', 'silent', true],
    ['a', 'a', true],
    ['a', 'b', false],
    ['a', 'aa', false],
    ['aa', 'a', false],
    ['a', 'ab', false],
    ['ab', 'a', false],
    ['ab', 'ba', true],
    ['abc', 'bca', true],
    ['abc', 'cab', true],
    ['abc', 'acb', true],
    ['abc', 'bac', true],
    ['abc', 'cba', true],
    ['abc', 'def', false],
    ['abc', 'abcd', false],
    ['abcd', 'abc', false]
];

const runTests = () => {
    var passCount = 0;
    var failCount = 0;
    testCases.forEach((testCase, index) => {
        const result = TextChecker.isAnagram(testCase[0], testCase[1]);
        const expected = testCase[2];
        if (expected === result) {
            passCount++;
        } else {
            failCount++;
        }
        console.log(`Test Case ${index + 1}`);
        console.log(`Input: ${testCase[0]}, ${testCase[1]}`);
        console.log(`Expected: ${expected}`);
        console.log(`Result: ${result}`);
        console.log(`Pass: ${expected === result}`);
        console.log();
    });

    console.log(`Pass Count: ${passCount}`);
    console.log(`Fail Count: ${failCount}`);
}

runTests();