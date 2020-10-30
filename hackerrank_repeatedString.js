// Hacker Rank - Warm Up Exercises: repeated string
/** (EASY) || Thursday Oct 29, 2020 || DATA STRUCTURES
https://www.hackerrank.com/challenges/repeated-string/problem

Task:
Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.
Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.
For example, if the string s = 'abcac' and n=10, the substring we consider is 'abcacabcac', the first 10 characters 
of her infinite string. There are 4 occurrences of a in the substring.

Function Description:
Complete the repeatedString function in the editor below. It should return an integer representing the number of 
occurrences of a in the prefix of length n in the infinitely repeating string.

repeatedString has the following parameter(s):
 * s: a string to repeat
 * n: the number of characters to consider

Input Format:
The first line contains a single string, s.
The second line contains an integer, n.

Constraints:
 * 1 <= |s| <= 100
 * 1 <= n <= 10^12
 * For 25% of the test cases, n <= 10^6.

Output Format:
Print a single integer denoting the number of letter a's in the first n letters of the infinite string created 
by repeating  infinitely many times.

Sample Input:
aba
10
Sample Output:
7
Explanation:
The first N=10 letters of the infinite string are abaabaabaa. Because there are 7 a's, we print 7 on a new line.

Sample Input:
a
1000000000000
Sample Output:
1000000000000
Explanation:
Because all of the first n=10^12 letters of the infinite string are a, we print 10^12 on a new line.

*/

// Complete the repeatedString function below.
function repeatedString(s, n) {
  // create a counter:
  let counter = 0;

  // count the # of "a" in the string s
  for (let letter of s) {
    if (letter === 'a') {
      counter++;
    }
  }
  console.log('counter of a in s: ', counter);
  // extrapolate the number of "a" if the string had length n
  // counter times the length difference
  counter = counter * Math.floor(n / s.length);
  console.log('counter of a in s repeated n times: ', counter);

  console.log('repetitions: ', Math.floor(n / s.length));
  console.log('remainder # of characters: ', n % s.length);
  // create another variable for the remainder (using mod operator )
  const remainder = s.slice(0, n % s.length);
  console.log('remainder: ', remainder);
  console.log("remainder's length: ", remainder.length);

  // count the # of "a" in the remainder string (could be a substring of s or nothing)
  if (remainder.length > 0) {
    for (let letter of remainder) {
      if (letter === 'a') {
        counter++;
      }
    }
  }
  console.log('counter of a in s repeated n times with remainder: ', counter);

  return counter;
}
