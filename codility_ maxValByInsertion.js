// Maximum Possible Value
/** (MEDIUM) || Wed Feb 17, 2021 || Math
https://www.lintcode.com/problem/maximum-possible-value/

Write a function that given an integer N, returns the maximum possible value obtained 
by inserting one '5' digit inside the decimal representation of integer N.

Example 1:
 * Input: N = 268
 * Output: 5268

Example 2:
 * Input: N = 670
 * Output: 6750

Example 3:
 * Input: N = 0
 * Output: 50

Example 4:
 * Input: N = -999
 * Output: -5999

Constraints
 * -8,000 <= N <= 8,000

*/

/**
 * @param N: an integer
 * @return: returns the maximum possible value obtained by inserting one '5' digit
 */

function MaximumPossibleValue(N) {
  // console.log('N:', N);

  /* If N is a negative integer, we can still do the same operation, just need to use Math.abs 
    to treat it as a positive integer.  At the end, add the negative sign back before returning the result.
		EDGE CASE: N === 0 --> return 50
    */

  const negative = N < 0;
  N = Math.abs(N);
  if (N === 0) {
    return 50;
  }

  // Find out what position is the left-most digit
  let leftMostIndex = Math.floor(Math.log10(N));
  // console.log('leftMostIndex:', leftMostIndex);

  /* Starting from the left-most digit (d), compare it to 5, and if:
   * d >= 5 --> continue checking the next digit to the right
   * d < 5 --> stop, add the 5 to the left (in front) of d
   */

  let k = -1; // this will be the index where we insert the 5
  for (let i = leftMostIndex; i >= 0; i--) {
    // Find out what's the digit at the ith position
    const digit = Math.floor(N / Math.pow(10, i)) % 10;
    // Compare the digit at the ith position to 5
    if (negative) {
      if (digit > 5) {
        // insert the 5 to the left
        k = i + 1;
        break;
      }
    } else {
      if (digit < 5) {
        // insert the 5 to the left
        k = i + 1;
        break;
      }
    }
  }
  // This covers edge cases where we have to put 5 at the very end (didn't find 'k')
  if (k === -1) {
    // positive example:  999 ->  9995
    // negative example: -111 -> -1115
    k = 0;
  }
  // console.log('k:', k);

  // Create the final integer, knowing where the 5 goes (kth position)
  // The number to the left of 5 need to shift once to the left + insert 5 + numbers to the right of the 5 stay put.
  const leftOfFivePart = Math.floor(N / Math.pow(10, k)) * Math.pow(10, k + 1);
  const fivePart = 5 * Math.pow(10, k);
  const rightOfFivePart = N % Math.pow(10, k);
  // console.log('leftOfFivePart:', leftOfFivePart);
  // console.log('fivePart:', fivePart);
  // console.log('rightOfFivePart:', rightOfFivePart);

  return (negative ? -1 : +1) * (leftOfFivePart + fivePart + rightOfFivePart);
}

MaximumPossibleValue(872);
