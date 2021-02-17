// Maximum Possible Value
/** (MEDIUM-HARD) || Wed Feb 17, 2021 || Strings

A string is balanced when every letter ocurring in the string appears in both
lowercase and uppercase. "CATattac" is balanced, but Madam is not ("d" only appears lowercase)
Note that the number of ocurrences does not matter.

Write a function that, given a String S of length N, returns the length of the shortest
balanced fragment of S. If S does not contain any balanced fragments, return -1.

Example 1:
 * Input: S = "azABaabza"
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

function solution(S) {
  // First, set up the counter:
  let counter = -1;

  // Then, determine which characters will be in the balanced subset.
  // To do that, we need to make sure those chars show up on both lowercase and uppercase.

  // Finally, using a sliding window, check from the beginning until we see a char that
  // does not belong in our subset of "desired chars".
  // When that happens, count the size of the window, compare it to the counter, and restart the window.
}
