# Lesson 1

## Explanation:
	•	Function: The sumEvery(nums) function takes an array (nums) as input. It specifically returns the sum of the first two elements of the array (nums[0] + nums[1]).
	•	Test Case 1: sumEvery([1, 2]) returns 1 + 2, which equals 3. This passes the condition sumEvery([1, 2]) === 3, so "Pass" is logged.
	•	Test Case 2: sumEvery([1, 2, 3]) attempts to return 1 + 2. However, the expected value is 6, which fails the test since sumEvery([1, 2, 3]) returns 3. Therefore, "Fail" is logged.

## Issues:
	•	The function doesn’t handle arrays with more than two elements. If the array has more elements, it simply ignores them. The test case sumEvery([1, 2, 3]) doesn’t work because it only considers the first two elements (1 + 2), which results in 3 instead of the expected 6.


### =================================

# Lesson 2

## Explanation:
	•	Function: The sumEvery(nums) function now uses the reduce() method to sum up all elements in the array. reduce() is a higher-order function that iterates over the array and applies the callback function (cur, next) => cur + next on each pair of elements. This will return the sum of all elements in the array.
	•	cur is the current value of the accumulated sum.
	•	next is the next value from the array.
	•	Test Case 1: sumEvery([1, 2]) will sum 1 + 2, which equals 3, so "Pass" is logged.
	•	Test Case 2: sumEvery([1, 2, 3]) will sum 1 + 2 + 3, which equals 6, so "Pass" is logged.

## Advantages:
	•	This version of the function works for arrays of any length, as reduce() adds all elements of the array together.
	•	You don’t need to worry about how many elements are in the array. The function works dynamically.

### ===============================

## Summary of Differences:
	1.	First version (sumEvery(nums)): Only works for the first two elements of the array. It doesn’t handle arrays of varying lengths correctly.
	2.	Second version (sumEvery(nums)) with reduce(): Works for arrays of any size. It dynamically sums all the elements in the array, making it more flexible.