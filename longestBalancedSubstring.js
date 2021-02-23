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
  console.log(`findLongest("${s}")`);
  // Base case #1: 0 or 1 length -> return 0.
  if (s.length <= 1) {
    console.log('base case #1');
    return 0;
  }
  // Base case #2: no unbalanced characters -> return entire string length.
  // findUnbalanced() is a helper function that returns an array with the indexes of all unbalanced chars in s
  const unbalancedIndices = findUnbalanced(s);
  console.log('unbalancedIndices:', unbalancedIndices);
  if (unbalancedIndices.length === 0) {
    console.log('base case #2');
    return s.length;
  }

  // Enter the recursion!
  let longest = 0; // counter
  // Unbalanced indexes will be used to cut the string into substrings (function defined on )
  const substrings = getSubstrings(s, unbalancedIndices);
  console.log('substrings:', substrings);
  // Loop through each substring, repeating the whole process, unless we hit a base case:
  for (let substr of substrings) {
    const answer = findLongest(substr);
    if (answer > longest) {
      longest = answer;
    }
  }
  return longest;
}

function findUnbalanced(s) {
  let unbalancedIndices = [];
  // Loop through s, add to set
  const mySet = new Set();
  for (let char of s) {
    mySet.add(char);
  }
  // Loop through s again, keep track of the index of each
  for (let i = 0; i < s.length; i++) {
    // is the char upper case?
    if (s[i] === s[i].toUpperCase()) {
      // Look for the lowerCase equivalent in 'mySet'
      if (!mySet.has(s[i].toLowerCase())) {
        // char is unbalanced -> record index
        unbalancedIndices.push(i);
      }
    }
    if (s[i] === s[i].toLowerCase()) {
      // Look for the upperCase equivalent in 'mySet'
      if (!mySet.has(s[i].toUpperCase())) {
        // char is unbalanced -> record index
        unbalancedIndices.push(i);
      }
    }
  }
  return unbalancedIndices;
}

function getSubstrings(s, unbalancedIndices) {
  // Partitions the string into new substrings, based on the unbalanced indices
  let substringArray = [];
  let prev = 0;
  for (let i of unbalancedIndices) {
    substringArray.push(s.slice(prev, i));
    prev = i + 1;
  }
  substringArray.push(s.slice(prev));
  return substringArray;
}
