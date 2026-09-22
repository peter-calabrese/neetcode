class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  findMaxConsecutiveOnes(nums) {
    let count = 0;
    let maxCount = 0;

    for (const num of nums) {
        console.log(num)
      if (num === 1) {
        count++;
      } else {
        count = 0;
      }

      if (count > maxCount) maxCount = count;

    }
      return maxCount;

  }
}

/**
 * numbers
 * count the number of 1's next to each other.
 * if its 0 we reset
 */
