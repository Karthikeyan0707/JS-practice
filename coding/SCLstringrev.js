function rev(n, a = [], b = []) {
  var strrev = "";
  var str = "Little Lamb, I'll tell thee;";
  var len = str.length;
  var x, y, temp;
  for (var c = 0; c < n; c++) {
    x = ((a[c] % len) + len) % len;
    y = ((b[c] % len) + len) % len;
    if (x > y) {
      temp = x;
      x = y;
      y = temp;
    }
    for (var i = 0; i < x; i++) {
      strrev += str[i];
    }
    for (var j = y - 1; j >= x; j--) {
      strrev += str[j];
    }
    for (var k = y; k < len; k++) {
      strrev += str[k];
    }
    str = "";
    str = strrev;
    strrev = "";
  }
  console.log(str);
}
rev(2, [-17, -7], [198, 950]);
