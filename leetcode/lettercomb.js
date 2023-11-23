const letterCombinations = function (digits) {
  if (!digits) {
    return [];
  }

  // Create a mapping of digits to corresponding letters
  const digitToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // Initialize the result with an empty string
  let result = [""];

  for (let i = 0; i < digits.length; i++) {
    const currentDigit = digits[i];
    currentDigit;
    const letters = digitToLetters[currentDigit];
    const newResult = [];
    for (let j = 0; j < result.length; j++) {
      for (let k = 0; k < letters.length; k++) {
        newResult.push(result[j] + letters[k]);
      }
    }

    result = newResult;
  }

  return result;
};

const inputDigits = "23";
console.log(letterCombinations(inputDigits));
