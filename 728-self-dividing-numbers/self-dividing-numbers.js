/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let ans = [];

    for (let num = left; num <= right; num++) {
        let temp = num;
        let isSelfDividing = true;

        while (temp > 0) {
            let digit = temp % 10;

            // 0 digit allowed nahi hai
            if (digit === 0 || num % digit !== 0) {
                isSelfDividing = false;
                break;
            }

            temp = Math.floor(temp / 10);
        }

        if (isSelfDividing) {
            ans.push(num);
        }
    }

    return ans;
};