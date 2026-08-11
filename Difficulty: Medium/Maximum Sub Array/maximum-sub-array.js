class Solution {
    findSubarray(arr) {
        let sum = 0;
        let maxSum = -Infinity;

        let start = 0;
        let ansStart = -1;
        let ansEnd = -1;

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] < 0) {
                sum = 0;
                start = i + 1;
                continue;
            }

            sum += arr[i];

            let currentLength = i - start + 1;
            let maxLength = ansEnd - ansStart + 1;

            if (
                sum > maxSum ||
                (sum === maxSum && currentLength > maxLength)
            ) {
                maxSum = sum;
                ansStart = start;
                ansEnd = i;
            }
        }

        if (ansStart === -1) {
            return [-1];
        }

        return arr.slice(ansStart, ansEnd + 1);
    }
}