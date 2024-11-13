const Matrix = require('./Matrix');

const testCases = [
    {
        "input": [
            {
                "rows": 3,
                "cols": 2,
                "data": [1, 3, 1, 0, 1, 2]
            },
            {
                "rows": 3,
                "cols": 2,
                "data": [0, 0, 7, 5, 2, 1]
            }
        ]
    }
];

const expectedResults = [
    {
        "output": {
            "rows": 3,
            "cols": 2,
            "data": [1, 3, 8, 5, 3, 3]
        }
    }
];

const runTests = () => {
    testCases.forEach((testCase, index) => {
        const result = Matrix.add(testCase);
        const expected = expectedResults[index];
        console.log(`Test Case ${index + 1}`);
        console.log(`Input: ${JSON.stringify(testCase.input, null, 2)}`);
        console.log(`Expected: ${JSON.stringify(expected, null, 2)}`);
        console.log(`Result: ${JSON.stringify(result.output, null, 2)}`);
        var rowsEqual = expected.output.rows === result.output.rows;
        var colsEqual = expected.output.cols === result.output.cols;
        var dataEqual = JSON.stringify(expected.output.data) === JSON.stringify(result.output.data);
        console.log(`Pass: ${rowsEqual && colsEqual && dataEqual}`);
        console.log();
    });
}

runTests();
