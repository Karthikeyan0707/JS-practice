function eco(n, arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  function median(arr, len) {
    if (len % 2) {
      return arr[Math.floor(len / 2)];
    }
    return (arr[Math.floor(len / 2 - 1)] + arr[Math.floor(len / 2)]) / 2;
  }
  var sub_arr = new Array(n);
  var a,
    mean,
    median_,
    diff,
    max_diff = 0,
    i_;
  for (var i = 0; i <= 2 ** n; i++) {
    var sub_arrlen = 0,
      idx = 0,
      sum = 0;
    for (var j = 0; j < n; j++) {
      if (i & (1 << j)) {
        sub_arrlen += 1;
        sum += arr[j];
        sub_arr[idx++] = arr[j];
        a += arr[j];
      }
      a += "\t";
    }
    if (sub_arrlen > 0) {
      mean = sum / sub_arrlen;
      console.log("mean", mean);
      median_ = median(sub_arr, idx);
      console.log("median:", median_);
      diff = mean - median_;
      if (diff > max_diff) {
        i_ = i;
        max_diff = diff;
      }
      console.log("difference:", diff);
    }
    a += "\n";
  }
  console.log(i_);
  console.log(a);
  var b = [];
  for (var k = 0; k < n; k++) {
    if (i_ & (1 << k)) {
      b.push(arr[k]);
    }
  }
  console.log(b);
}
eco(5, [1, 2, 2, 3, 3]);
