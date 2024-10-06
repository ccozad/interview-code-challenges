 exports.bruteForceTwoSum = (numbers, target) => {
    var results = [];
    //console.log(`Finding pairs that add up to ${target} using brute force...`);
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                //console.log(`Found ${numbers[i]} + ${numbers[j]} = ${target}`);
                results.push([i, j]);
            }
        }
    }
    return results;
}

exports.hashTableTwoSum = (numbers, target) => {
    var results = [];
    var hashTable = {};
    //console.log(`Finding pairs that add up to ${target} using a hash table...`);
    for (let i = 0; i < numbers.length; i++) {
        var complement = target - numbers[i];
        if (hashTable[complement] !== undefined) {
            //console.log(`Found ${numbers[i]} + ${complement} = ${target}`);
            results.push([hashTable[complement], i]);
        }
        hashTable[numbers[i]] = i;
    }
    return results;
}