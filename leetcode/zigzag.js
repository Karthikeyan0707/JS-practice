function convert(s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows[i] = "";
  }
  let index = 0;
  let step = 1;

  //   for (let i=0;i<s.length;i++) {
  //     rows[index] += s[i];

  for (const char of s) {
    rows[index] += char;
    if (index === 0) {
      step = 1;
    } else if (index === numRows - 1) {
      step = -1;
    }
    index += step;
  }

  return rows.join("");
}

// Example usage
const s = "PAYPALISHIRING";
const numRows = 3;
const zigzag = convert(s, numRows);
console.log(zigzag); // Output: "PAHNAPLSIIGYIR"
