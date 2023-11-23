function bf(a, b = []) {
    var count = 0,
      count1 = 0,
      count2 = 0;
    for (var i = 0; i < a; i++) {
      if (b[i] == 1) {
        count++;
      }
      if (b[i] == 2) {
        count1++;
      }
      if (b[i] == 3) {
        count2++;
      }
    }
    var min = Math.min(count, count1, count2);
    console.log(min);
  }
  bf(11, [1, 1, 1, 2, 1, 2, 3, 1, 3, 3, 2]);
  



  