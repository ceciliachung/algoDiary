// Hacker Rank - Warm Up Exercises: sock merchant
/** (EASY) || Wednesday Oct 28, 2020 || DATA STRUCTURES
https://www.hackerrank.com/challenges/sock-merchant/problem

Task
Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. 
Given an array of integers representing the color of each sock, determine how many pairs of socks with 
matching colors there are.

For example, there are n=7 socks with colors ar = [1,2,1,2,1,3,2]. 
There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. 
The number of pairs is 2.

Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number 
of matching pairs of socks that are available.

sockMerchant has the following parameter(s):
 * n: the number of socks in the pile
 * ar: the colors of each sock

 Input Format

The first line contains an integer n, the number of socks represented in ar.
The second line contains n space-separated integers describing the colors ar[i] of the socks in the pile.

Constraints
 * 1 <= n <= 100
 * 1 <= ar[i] <= 100 where 0 <= i < n

Output Format
Return the total number of matching pairs of socks that Alex can sell.

Sample Input
* 9
* 10 20 20 10 10 30 50 10 20

Sample Output
* 3
(2 pairs of color 10, 1 pair of color 20)
*/

function sockMerchant(n, ar) {
  // create a dictionary that will store how many units we have of each sock color
  let dictionary = {};

  // if the each ith element is not in the dictionary, add it and start it to value 1; if it is already in the dictionary, then add 1 to the value.
  for (let i = 0; i < ar.length; i++) {
    if (dictionary[ar[i]]) {
      // if(dictionary.hasOwnProperty(arr[i]))
      dictionary[ar[i]]++;
    } else {
      dictionary[ar[i]] = 1;
    }
  }

  // at the end, we will divide the totals of each color by 2, round down, and add the total of pairs.
  let result = 0;
  for (let color in dictionary) {
    result += Math.floor(dictionary[color] / 2);
  }
  return result;
}
