class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const hash1 = {};
    const hash2 = {};
    for (const char of s) {
      if (!hash1[char]) {
        hash1[char] = 1;
      } else {
        hash1[char] += 1;
      }
    }
    for (const char of t) {
      if (!hash2[char]) {
        hash2[char] = 1;
      } else {
        hash2[char] += 1;
      }
    }

    return Object.keys(hash1).every((key) => hash1[key] === hash2[key]);
  }
}
