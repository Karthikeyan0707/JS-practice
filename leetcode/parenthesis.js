// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

function generateParenthesis(n) {
  const result = [];

  function backtrack(combination, open, close) {
    if (combination.length === 2 * n) {
      result.push(combination);
      return;
    }

    if (open < n) {
      backtrack(combination + "(", open + 1, close);
    }

    if (close < open) {
      backtrack(combination + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);
  return result;
}

// Example usage:
const n = 3;
const combinations = generateParenthesis(n);
console.log(combinations);
