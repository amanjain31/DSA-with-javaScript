/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLength = 0;
    const charSet = new Set();

    for (let right = 0; right < s.length; right++) {

        // Jab duplicate character mile, left pointer ko aage badhao
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        // Current character ko window mein add karo
        charSet.add(s[right]);

        // Maximum length update karo
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};