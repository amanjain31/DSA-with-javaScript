/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(arr) {
    let longest = 0;
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], true);
    }

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i] - 1)) {
            map.set(arr[i], false)
        }
    }

    for (let key of map.keys()) {
        if (map.get(key)) {
            let count = 1;

            while (map.has(key + count)) {
                count++;
            }

            longest = Math.max(count, longest);
        }

    }

    return longest;
};