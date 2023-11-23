function maxArea(height) {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // Calculate the width of the container (distance between two lines).
    const width = right - left;

    // Calculate the height of the container (minimum height of two lines).
    const containerHeight = Math.min(height[left], height[right]);

    // Calculate the current water volume.
    const currentWater = width * containerHeight;

    // Update maxWater if the current water volume is greater.
    maxWater = Math.max(maxWater, currentWater);

    // Move the pointers towards each other.
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// Example usage:
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const result = maxArea(height);
console.log(result); // This will output the maximum amount of water the container can store.

// function maxArea(height) {
//     let maxWater = 0;

//     for (let left = 0; left < height.length - 1; left++) {
//       for (let right = left + 1; right < height.length; right++) {
//         // Calculate the width of the container (distance between two lines).
//         const width = right - left;

//         // Calculate the height of the container (minimum height of two lines).
//         const containerHeight = Math.min(height[left], height[right]);

//         // Calculate the current water volume.
//         const currentWater = width * containerHeight;

//         // Update maxWater if the current water volume is greater.
//         maxWater = Math.max(maxWater, currentWater);
//       }
//     }

//     return maxWater;
//   }

//   // Example usage:
//   const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
//   const result = maxArea(height);
//   console.log(result); // This will output the maximum amount of water the container can store.
