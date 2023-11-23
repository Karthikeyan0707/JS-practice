function coin(x, y, n, arr = [[]]) {
  var b = [],
    t = 0,
    val = 0;
  b.push(val);
  for (i = 0; i < n; i++) {
    if (arr[i][0] == 0) {
      if (val < x) {
        val += 2 * arr[i][1];
      } else {
        val += arr[i][1];
      }
      b.push(val);
      t++;
    }
    if (arr[i][0] == 1 && val > y) {
      b.pop();
      t--;
    }
  }
  return b[t];
}
console.log(
  coin(10, 10, 4, [
    [0, 5],
    [1, 0],
    [0, 3],
    [1, 0],
  ])
);
