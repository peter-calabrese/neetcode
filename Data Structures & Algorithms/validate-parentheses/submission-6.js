class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const pairs = {
      "}": "{",
      ")": "(",
      "]": "[",
    };
    const open = [];
    for (let i = 0; i < s.length; i++) {
      const el = s[i];
      if (["{", "(", "["].includes(el)) open.push(el);
      if (pairs[el]) {
        if (pairs[el] != open.pop()) {
          return false;
        }
      }
    }
    return open.length < 1;
  }
}
