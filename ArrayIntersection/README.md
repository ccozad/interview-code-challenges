# Overview

Given two arrays of integers, find the unique elements they have in common in any order.

# General Approach

1. Add every item in first array to a lookup dictionary
2. Add values to the intersection from the second array if they are in the lookup dictionary
3. Delete values from the lookup after they are found to prevent duplicates

# Run

`node ArrayToolRunner.js`

# Output

```
Test Case 1
Input: 1,2,2,1, 2,2
Expected: 2
Result: 2
Pass: true

Test Case 2
Input: 4,9,5, 9,4,9,8,4
Expected: 9,4
Result: 9,4
Pass: true

Pass Count: 2
Fail Count: 0
```