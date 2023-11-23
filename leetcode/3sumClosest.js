function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b); // Sort the input array in ascending order.
  let closestSum = Number.MAX_SAFE_INTEGER;
  let closestDiff = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const currentSum = nums[i] + nums[j] + nums[k];
        const currentDiff = Math.abs(currentSum - target);

        if (currentDiff < closestDiff) {
          closestDiff = currentDiff;
          closestSum = currentSum;
        }
      }
    }
  }

  return closestSum;
}

// Example usage:
const nums = [-1, 2, 1, -4];
const target = 1;
const result = threeSumClosest(nums, target);
console.log(result); // Output will be the sum of the closest three integers to the target.
