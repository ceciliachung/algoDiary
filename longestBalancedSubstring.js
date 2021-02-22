// Longest Balanced Substring
/** (MEDIUM-HARD) || Wed Feb 17, 2021 || Strings

A string is balanced when every letter ocurring in the string appears in both
lowercase and uppercase. "CATattac" is balanced, but Madam is not ("d" only appears lowercase)
Note that the number of ocurrences does not matter.

Write a function that, given a String S of length N, returns the length of the longest
balanced fragment of S. If S does not contain any balanced fragments, return 0.

Example 1:
 * Input: S = "aABaabza"
 * Output: 5 ("ABaab")

Example 2:
 * Input: S = "TacoCat"
 * Output: -1

Example 3:
 * Input: S = "AcZCbaBz"
 * Output: 8 ("AcZCbaBz")

Example 4:
 * Input: S = "abcdefghijklmnopqrstuvwxyz"
 * Output: -1

Constraints
 * 1 <= N <= 200
 * S consists only of letters

*/

function findLongest(s) {
  // Base cases, since we will be using recursion:
  if (s.length <= 1) {
    return 0; //A string of 1 char cannot be balanced
  }
  if (findUnbalanced(s).length === 0) {
    return s.length;
    //findUnbalanced() is a helper function that returns an array with the indexes of all unbalanced chars in s
  }

  // Enter the recursion!
  let longest = 0; // counter
  // 1) Find the unbalanced indexes (function defined on )
  const unbalancedIdx = findUnbalanced(s);
  // 2) These indexes will be used to cut the string into substrings (function defined on )
  const substrings = getSubstring(s, unbalancedIdx);
  // 3) Loop through each substring, repeating the whole process, unless we hit a base case:
  for (let substr of substrings) {
    const answer = findLongest(substr);
    if (answer > longest) {
      longest = answer;
    }
  }
  return longest;
}

function findUnbalanced(s) {
  // Loop through s, add to set
  const mySet = new Set();
  for (let char of s) {
    mySet.add(char);
  }
  // Loop through set and check if both the upper and lower case exist
}

function getSubstring(s, unbalancedIdx) {}
