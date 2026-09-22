class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        return [...nums,...nums]
    }
}

/**
 * nums =[1,2,3]
 * ans = [x,x,x,x,x,x]
 * s
 */