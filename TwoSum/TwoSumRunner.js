const { performance } = require('perf_hooks');
const TwoSum = require('./TwoSum');
const exp = require('constants');

const tinyNumbers = [2, 7, 11, 15];
const tinyTarget = 9;
const tinyCorrectAnswer = 1;

var smallNumbers = [];
for (let i = 0; i < 100; i++) {
    smallNumbers.push(i);
}
const smallTarget = 50;
const smallCorrectAnswer = 25;

var mediumNumbers = [];
for (let i = 0; i < 1000; i++) {
    mediumNumbers.push(i);
}
const mediumTarget = 500;
const mediumCorrectAnswer = 250;

var largeNumbers = [];
for (let i = 0; i < 100000; i++) {
    largeNumbers.push(i);
}
const largeTarget = 50000;
const largeCorrectAnswer = 25000;

var algos = [
    {algo: TwoSum.bruteForceTwoSum, name: 'Brute Force'},
    {algo: TwoSum.hashTableTwoSum, name: 'Hash Table'}
]

const evaluate = (name, algo, numbers, target, correctAnswer) => {
    var start = performance.now();
    var results = algo(numbers, target);
    var end = performance.now();
    return {
        name: name,
        isCorrect: results.length === correctAnswer,
        time: end - start,
        actual: results.length,
        expected: correctAnswer
    };
}

const resultToString = (result) => {
    if (result.isCorrect) {
        return `${result.name} took ${result.time.toFixed(3)} milliseconds`;
    } else {
        return `${result.name} is incorrect. Expected ${result.expected} but got ${result.actual}`;
    }
}

// Tiny results
console.log('\nProcessing small list...');
const tinyResults = []
algos.forEach(a => {
    tinyResults.push(evaluate(
        a.name,
        a.algo, 
        tinyNumbers, 
        tinyTarget, 
        tinyCorrectAnswer
    ));
});

const tinyResultText = tinyResults.map(result => {
    return resultToString(result);
}).join('\n');
console.log(tinyResultText);

// Small results
console.log('\nProcessing small list...');
const smallResults = []
algos.forEach(a => {
    smallResults.push(evaluate(
        a.name,
        a.algo, 
        smallNumbers, 
        smallTarget, 
        smallCorrectAnswer
    ));
});

const smallResultText = smallResults.map(result => {
    return resultToString(result);
}).join('\n');
console.log(smallResultText);

// Medium results
console.log('\nProcessing medium list...');
const mediumResults = []
algos.forEach(a => {
    mediumResults.push(evaluate(
        a.name,
        a.algo, 
        mediumNumbers, 
        mediumTarget, 
        mediumCorrectAnswer
    ));
});

const mediumResultText = mediumResults.map(result => {
    return resultToString(result);
}).join('\n');
console.log(mediumResultText);

// Extra Large results
console.log('\nProcessing large list...');
const largeResults = []
algos.forEach(a => {
    largeResults.push(evaluate(
        a.name,
        a.algo, 
        largeNumbers, 
        largeTarget, 
        largeCorrectAnswer
    ));
});

const largeResultText = largeResults.map(result => {
    return resultToString(result);
}).join('\n');
console.log(largeResultText);
