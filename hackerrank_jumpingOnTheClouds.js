// Hacker Rank - Warm Up Exercises: jumping on the clouds
/** (EASY) || Thursday Oct 29, 2020 || DATA STRUCTURES
https://wwww.hackerrank.com/challenges/jumping-on-the-clouds/problem

Task
Emma is playing a new mobile game that starts with consecutively numbered clouds. 
Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having 
a number that is equal to the number of the current cloud plus 1 or 2. She must avoid the thunderheads. 
Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last 
cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided. 
For example, c = [0,1,0,0,0,1,0] indexed from 0...6. The number on each cloud is its index in the list 
so she must avoid the clouds at indexes 1 and 5. She could follow the following two paths: 
0 -> 2 -> 4 -> 6 or 0 -> 2 -> 3 -> 4 -> 6 . The first path takes 3 jumps while the second takes 4.

Function Description:
Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps 
required, as an integer.

jumpingOnClouds has the following parameter(s):
 * c: an array of binary integers


Input Format:
The first line contains an integer n, the total number of clouds. 
The second line contains n space-separated binary integers describing clouds c[i] where 0 <= i < n.

Constraints:
 * 2 <= n <= 100
 * c[i] E {0,1}
 * c[0] = c[n-1] = 0

Output Format:
Print the minimum number of jumps needed to win the game.

Sample Input:
7
0 0 1 0 0 1 0
Sample Output:
4
Explanation:
Emma must avoid c[2] and c[5]. She can win the game with a minimum of 4 jumps:
0 -> 1 -> 3 -> 4 -> 6
*/

function jumpingOnClouds(c) {
  // initialize a counter:
  let counter = 0;

  // you always start on the 0th. Determine if you can do a long jump (2)
  for (let i = 1; i < c.length; i++) {
    // if the next cloud is a 0, you can long jump
    counter++;
    if (c[i + 1] === 0) {
      i++;
    }
  }
  return counter;
}
