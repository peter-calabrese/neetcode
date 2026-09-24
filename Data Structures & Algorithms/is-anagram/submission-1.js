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

    for (let i = 0; i < t.length; i++ ) {
      hash1[s[i]] = (hash1[s[i]] || 0) + 1;
      hash2[t[i]] = (hash2[t[i]] || 0) + 1;
    }

    return Object.keys(hash1).every((key) => hash1[key] === hash2[key]);
  }
}
