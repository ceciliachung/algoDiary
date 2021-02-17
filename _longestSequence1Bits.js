// Longest Sequence of 1 Bits
/** (EASY) || Wed Feb 17, 2021 || Bytes

Given a binary number N, find the longest sequence of 1 digits in it.

Example 1:
 * Input: N = "111000101010011"
 * Output: 3

 Example 2:
 * Input: N = "100000001"
 * Output: 1

Example 3:
 * Input: N = "00000"
 * Output: 0 
 
*/

function longestBits(N) {
  // Initialize a max counter and a local counter
  let maxCounter = 0;
  let localCounter = 0;

  // k is the left-most index of the bit number (a 1)
  let k = Math.floor(Math.log2(N));

  // loop through the binary number, starting from index 0 (right-most)
  for (let i = 0; i <= k; i++) {
    // this gets the value of the bit at ith position
    if (N >>> i && 1) {
      localCounter++;
    } else {
      localCounter = 0; // stop and restart local counter
    }
    if (localCounter > maxCounter) {
      maxCounter = localCounter;
    }
  }
  return maxCounter;
}
