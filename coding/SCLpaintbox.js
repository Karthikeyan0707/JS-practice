function paint(str) {
  var len = str.length;
  var count = 0;
  let min = 999999;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j <= i; j++) {
      if (str[j] == "Y") {
        count += 1;
      }
    }
    count;
    for (var k = i + 1; k < len; k++) {
      if (str[k] == "R") {
        count++;
      }
    }
    min = Math.min(count, min);
    count = 0;
  }

  console.log(min);
}
paint("RYRYR");
