/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */

class Solution {
    countDistinct(arr, k) {
        // code here
        let ans = [];

        let map = new Map();

        for (let i = 0; i < k - 1; i++) {
            if (map.has(arr[i])) {
                map.set(arr[i], map.get(arr[i]) + 1)
            } else {
                map.set(arr[i], 1)
            }
        }

        let i = 0;
        let j = k - 1;

        while (j < arr.length) {
            if (!map.has(arr[j])) {
                map.set(arr[j], 1)
            } else {
                map.set(arr[j], map.get(arr[j]) + 1);
            }

            ans.push(map.size);

            if (map.get(arr[i]) === 1) {
                map.delete(arr[i])
            } else {
                map.set(arr[i], map.get(arr[i]) - 1)
            }

            i++;
            j++;
        }

        return ans;
    }
}