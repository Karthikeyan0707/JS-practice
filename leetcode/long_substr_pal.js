function longestPalindromicSubstring(s) {
  if (!s) {
    return "";
  }

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  }

  let longestPalindrome = "";

  for (let i = 0; i < s.length; i++) {
    // Odd length palindrome
    const palindrome1 = expandAroundCenter(i, i);
    if (palindrome1.length > longestPalindrome.length) {
      longestPalindrome = palindrome1;
    }

    // Even length palindrome
    const palindrome2 = expandAroundCenter(i, i + 1);
    if (palindrome2.length > longestPalindrome.length) {
      longestPalindrome = palindrome2;
    }
  }

  return longestPalindrome;
}

// Example usage:
const s = "babad";
const result = longestPalindromicSubstring(s);
console.log(result); // Output: "bab" or "aba" (either is a valid answer)
