// Maximum Possible Value
/** (EASY) || Wed Feb 17, 2021 || Strings

Days of the week are represented as three-letter strings
("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun").

Write a function that, given a string S representing the day of the week
and an integer k (between 0 and 500), returns the day of the week that is 
k days later.

Example 1:
 * Input: S = "Wed" & k = 2
 * Output: "Fri"

Example 2:
 * Input: S = "Sat" & k = 23
 * Output: "Mon"

Constraints
 * 0 <= k <= 500
 * S consists only of 3-char strings

*/

function solution(S, k) {
  // Assign each day of the week to a number
  // Note "Sun" is 0, since we will be using %7, 0 and 7 are equivalent
  const daysOfWeekDigits = {
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
    Sun: 0,
  };
  // Also do the reverse, since we're returning the string, not the integer:
  const daysOfWeekStrings = {
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
    0: 'Sun',
  };

  // Given S, transform to the number:
  let day = daysOfWeekDigits(S);

  // Add k days to day and %7 to get the remainder
  let result = (daysOfWeekDigits + k) % 7;

  // Transform back to the corresponding string
  return daysOfWeekStrings(result);
}

// Or in one line:
// return daysOfWeekStrings((daysOfWeekDigits(S) + k) % 7)
