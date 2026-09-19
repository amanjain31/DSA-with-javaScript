/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(arr, target) {
    let f = 0;
    let l = arr.length - 1;
    let index = -1;

    while (f <= l) {
        let mid = Math.floor((f + l) / 2);
        if (arr[mid] === target) {
            index = mid;
            break;
        }
        if (arr[f] <= arr[mid]) {
            if (arr[f] <= target && target < arr[mid]) {
                l = mid - 1;
            }
            else {
                f = mid + 1;
            }

        }
        else {
            if (arr[mid] < target && target <= arr[l]) {
                f = mid + 1;
            }
            else {
                l = mid - 1;
            }
        }
    }

    return index;
};