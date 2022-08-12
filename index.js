/*
PROBLEM: Write a function called hasTargetSum that receives two arguments:
an array of integers
a target integer
The function checks if any possible pair of integers in the array add to the target number

PLAN: There is no user interface. Only the tests are used. Input is an array and a target sum.
Output will be a true/false boolean value. Pseudocode:

iterate through the array
  if i is the same as j, continue to next loop iteration
  check if the first element plus any of the other elements add to the sum
  do this again for each other element
  
  this will use nested for loops
  loop1 - i will be the index of the array and one of the numbers
    loop2 - j will be the index of the array representing the other numbers

APPROACH: 
- create outer loop
- create inner loop
- create return statement
*/

function hasTargetSum(array, target) {
  for (const [ i, iVal ] of array.entries()) {
    for (const [ j , jVal ] of array.entries()) {
      if (i === j) {
        continue;
      }
      if (iVal + jVal === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n squared);
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 999));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 3, 4, 26, 8, 12, 4, 11, 7], 15));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([11, 22, 33, 44, 1, 3, 5, 7, 1000], 1007));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
