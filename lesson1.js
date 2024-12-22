function sumEverything(nums) {
    return nums[0] + nums[1];
  }
  
  if (sumEverything([1, 2]) === 3) {
    console.log("Test 1 Passed");
  } else {
    console.log("Test 1 Failed");
  }
  
  if (sumEverything([1, 2, 3]) === 6) {
    console.log("Test 2 Passed");
  } else {
    console.log("Test 2 Failed");
  }

  console.log(sumEvery([5, 10])); // 15
  console.log(sumEvery([3, 4, 5])); // 7 (ignores the third element, returns 3 + 4)

/*
function sumEverything(nums) {
  return nums.reduce((cur, next) => cur + next);
}

if (sumEverything([1, 2]) === 3) {
  console.log("Test 1 Passed");
} else {
  console.log("Test 1 Failed");
}

if (sumEverything([1, 2, 3]) === 6) {
  console.log("Test 2 Passed");
} else {
  console.log("Test 2 Failed");
}

console.log(sumEvery([5, 10])); // 15
console.log(sumEvery([3, 4, 5])); // 12 (3 + 4 + 5)
console.log(sumEvery([1, 2, 3, 4])); // 10 (1 + 2 + 3 + 4)
*/