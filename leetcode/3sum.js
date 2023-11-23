var threeSum = function (nums) {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  var arr = [];
  for (let i = 0; i < len - 2; i++) {
    // Avoid duplicate values for i.
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      for (let j = i + 1; j < len - 1; j++) {
        // Avoid duplicate values for j.
        if (j === i + 1 || (j > i + 1 && nums[j] !== nums[j - 1])) {
          for (let k = j + 1; k < len; k++) {
            // Avoid duplicate values for k.
            if (k === j + 1 || (k > j + 1 && nums[k] !== nums[k - 1])) {
              const total = nums[i] + nums[j] + nums[k];
              if (total === 0) {
                arr.push([nums[i], nums[j], nums[k]]);
              }
            }
          }
        }
      }
    }
  }

  return arr;
};
console.log(threeSum([0]));
