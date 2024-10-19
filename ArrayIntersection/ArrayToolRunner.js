const ArrayTools = require('./ArrayTools');

const firstInputs = [
    [1, 2, 2, 1],
    [4, 9, 5]
];

const secondInputs = [
    [2, 2],
    [9, 4, 9, 8, 4]
];

const expectedResults = [
    [2],
    [9, 4]
];

const runTests = () => {
    var passCount = 0;
    var failCount = 0;
    firstInputs.forEach((firstInput, index) => {
        const result = ArrayTools.intersection(firstInput, secondInputs[index]);
        const expected = expectedResults[index];
        var pass = result.length === expected.length;

        for (let i = 0; i < expected.length; i++) {
            
            if (result.indexOf(expected[i]) === -1) {
                pass = false;
                break;
            }
        }

        if (pass) {
            passCount++;
        } else {
            failCount++;
        }
        console.log(`Test Case ${index + 1}`);
        console.log(`Input: ${firstInput}, ${secondInputs[index]}`);
        console.log(`Expected: ${expected}`);
        console.log(`Result: ${result}`);
        console.log(`Pass: ${pass}`);

        console.log();
    });

    console.log(`Pass Count: ${passCount}`);
    console.log(`Fail Count: ${failCount}`);
};

runTests();
