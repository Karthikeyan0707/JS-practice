// function getUnique(nums) {
//     let result = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (result.indexOf(nums[i]) === -1) {
//             result.push(nums[i]);
//         }
//     }
//     return result;
// }

// const array = [1, 1,2];
// console.log(getUnique(array));

var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let k = 1; // Initialize the count of unique elements to 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i]; // Overwrite the next unique element
      k++;
    }
  }
  return k;
};

// Example usage:
const nums = [1, 1, 2, 2, 2, 3, 4, 4, 5];
const k = removeDuplicates(nums);
console.log(k); // Output: 5
console.log(nums.slice(0, k)); // Output: [1, 2, 3, 4, 5]
