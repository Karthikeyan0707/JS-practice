var topKFrequent = function (nums, k) {
  var arr_sort = nums.sort((a, b) => {
    return a - b;
  });
  var count;
  var result = [];
  for (i = 0; i < arr_sort.length; i++) {
    count = 1;
    for (j = i + 1; j < arr_sort.length; j++) {
      if (arr_sort[i] == arr_sort[j]) {
        count++;
      } else {
        break;
      }
    }
    if (count >= k) {
      result.push(arr_sort[i]);
      i = j - 1;
    }
  }
  console.log(result);
};

var ar = [1, 1, 1, 2, 2, 3];
var k = 2;
topKFrequent(ar, k);
