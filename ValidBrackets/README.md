# Overview

Determine if given string has a valid order of opening and closing brackets. Which includes

```
()
{}
[]
```

# General Overview

Use a stack.

Enumerate each character, then
1. Each time there is an open bracket, push it on the stack
2. Each time a closing bracket is encountered, pop the stack
   - If the opening and closing are the same type, continue
   - Else end early, mismatched brackets, invalid

After all characters have been checked, any items left on the stack means there are mismatched brackets.

# Run

Execute the runner script

`node SyntaxCheckerRunner.js`

# Output


```
Test Case 1
Input: ()
Expected: true
Result: true
Pass: true

Test Case 2
Input: {}
Expected: true
Result: true
Pass: true

Test Case 3
Input: []
Expected: true
Result: true
Pass: true

Test Case 4
Input: [{}]
Expected: true
Result: true
Pass: true

Test Case 5
Input: {[]}
Expected: true
Result: true
Pass: true

Test Case 6
Input: {[()]}
Expected: true
Result: true
Pass: true

Test Case 7
Input: {[()]}
Expected: true
Result: true
Pass: true

Test Case 8
Input: {[()]
Expected: false
Result: false
Pass: true

Test Case 9
Input: {[(])}
Expected: false
Result: false
Pass: true

Test Case 10
Input: {[}
Expected: false
Result: false
Pass: true

Test Case 11
Input: ({[
Expected: false
Result: false
Pass: true

Pass Count: 11
Fail Count: 0
```