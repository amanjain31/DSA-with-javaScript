/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

var shipWithinDays = function(weights, days) {

    function isValid(capacity) {
        let currentWeight = 0;
        let countDays = 1;

        for (let i = 0; i < weights.length; i++) {

            if (currentWeight + weights[i] > capacity) {
                countDays++;
                currentWeight = weights[i];

                if (countDays > days) {
                    return false;
                }
            } else {
                currentWeight += weights[i];
            }
        }

        return true;
    }

    let first = -Infinity;
    let last = 0;
    let ans = -1;

    for (let i = 0; i < weights.length; i++) {
        first = Math.max(first, weights[i]);
        last += weights[i];
    }

    while (first <= last) {

        let mid = Math.floor((first + last) / 2);

        if (isValid(mid)) {
            ans = mid;
            last = mid - 1;
        } else {
            first = mid + 1;
        }
    }

    return ans;
};