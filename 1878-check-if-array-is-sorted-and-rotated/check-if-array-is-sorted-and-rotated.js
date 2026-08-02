/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(arr) {
    let count = 0;
    let isMore = false;

    if (arr[arr.length - 1] > arr[0]) {
        count++;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            count = count + 1;
        }
    }

    if (count === 0 || count === 1) {
        isMore = true;
    } else {
        isMore = false;
    }

    return isMore;
};