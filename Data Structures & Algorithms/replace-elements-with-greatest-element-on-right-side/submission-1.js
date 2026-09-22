class Solution {
  /**
   * @param {number[]} arr
   * @return {number[]}
   */
  replaceElements(arr) {
    let rightMax = -1

    for(let i =arr.length - 1; i>=0;i--){
        const current = arr[i]
        arr[i] = rightMax
        rightMax = Math.max(rightMax, current)
    }

    return arr;

  }
}

/**
 * [2,4,5,3,1,2]
 *
 * rightPointer = 6
 *
 *
 * leftPointer = 0
 *
 * num[0] - > right pointer goes backwards till it = leftPointer
 */
