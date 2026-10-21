class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isValidChar = (char) => /^[a-zA-Z0-9]$/.test(char);
        let end = s.length - 1;
        let start = 0;
        while (start < end) {
            if(!isValidChar(s[start])){
                start++;
                continue
            } else if (!isValidChar(s[end])) {
                end--;
                continue
            } else if(s[start].toLowerCase() !== s[end].toLowerCase()){
                return false
            }
            start++;
            end--;
        }
        return true
    }
}
