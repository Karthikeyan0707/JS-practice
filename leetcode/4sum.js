function fourSum(nums, target) {
  const result = [];
  const n = nums.length;

  if (n < 4) {
    return result;
  }

  nums.sort((a, b) => a - b);

  for (let a = 0; a < n - 3; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) {
      continue; // Skip duplicate values
    }

    for (let b = a + 1; b < n - 2; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) {
        continue; // Skip duplicate values
      }

      for (let c = b + 1; c < n - 1; c++) {
        if (c > b + 1 && nums[c] === nums[c - 1]) {
          continue; // Skip duplicate values
        }

        for (let d = c + 1; d < n; d++) {
          if (d > c + 1 && nums[d] === nums[d - 1]) {
            continue; // Skip duplicate values
          }

          const sum = nums[a] + nums[b] + nums[c] + nums[d];

          if (sum === target) {
            result.push([nums[a], nums[b], nums[c], nums[d]]);
          }
        }
      }
    }
  }

  console.log(result);
}

// Example usage:
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
const uniqueQuadruplets = fourSum(nums, target);
// console.log(uniqueQuadruplets);
