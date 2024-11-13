# Overview
Given two matrices of equal dimensions, find the sum the two matrices.

The input is a dictionary like the following:
```
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
```

The output should be a dictionary formatted like the following:
```
{
    "output": {
        "rows": 3,
        "cols": 2,
        "data": [1, 3, 8, 5, 3, 3]
    }
}

For an explantion of the math, see https://en.wikipedia.org/wiki/Matrix_addition