/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let next = (i + 1) % arr.length;
        if (arr[i] > arr[next]) {
            count++;
        }
    }
    return count <= 1
};