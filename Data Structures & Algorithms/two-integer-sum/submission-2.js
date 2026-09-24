class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const map ={}

    for (let i = 0; i < nums.length; i++) {
      const hunt = target - nums[i];
       
      if (map[hunt] != null) {
   
        return [Math.min(map[hunt], i), Math.max(map[hunt], i)];
      } else {
        map[nums[i]] = i;
      }
    }
    return [1, 1];
  }
}
