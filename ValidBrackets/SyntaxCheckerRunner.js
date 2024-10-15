const SyntaxChecker = require('./SyntaxChecker');

const testCases = [
    ['()', true],
    ['{}', true],
    ['[]', true],
    ['[{}]', true],
    ['{[]}', true],
    ['{[()]}', true],
    ['{[()]}',  true],
    ['{[()]', false],
    ['{[(])}', false],
    ['{[}', false],
    ['({[', false],
];

const runTests = () => {
    var passCount = 0;
    var failCount = 0;
    testCases.forEach((testCase, index) => {
        const result = SyntaxChecker.isBalancedBrackets(testCase[0]);
        const expected = testCase[1];
        if (expected === result) {
            passCount++;
        } else {
            failCount++;
        }
        console.log(`Test Case ${index + 1}`);
        console.log(`Input: ${testCase[0]}`);
        console.log(`Expected: ${expected}`);
        console.log(`Result: ${result}`);
        console.log(`Pass: ${expected === result}`);
        console.log();
    });

    console.log(`Pass Count: ${passCount}`);
    console.log(`Fail Count: ${failCount}`);
}

runTests();