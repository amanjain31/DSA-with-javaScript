/**
 * @param {number[]} A
 * @param {number} n
 * @returns {number}
 */

class Solution {
    stockBuySell(arr) {
        let maxProfit = 0;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > arr[i - 1]) {
                maxProfit += arr[i] - arr[i - 1];
            }
        }

        return maxProfit;
    }
}