# MongoDB $inc Operator Type Error
This example demonstrates a common error when using the `$inc` operator in MongoDB update queries. The `$inc` operator is designed to increment a numeric field by a specified value.  However, if the value provided is not a number, it will result in an error or unexpected behavior.

The `bug.js` file contains the incorrect implementation, while `bugSolution.js` provides the corrected version.

## Bug
Incorrectly using a string value ('1') with the `$inc` operator. This will likely throw an error or fail to increment the counter correctly.
## Solution
Use a numeric value (1) for the increment to properly increment the counter.