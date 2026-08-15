var sortedSquares = function(arr) {
    let ans = new Array(arr.length);

    let left = 0;
    let right = arr.length - 1;
    let index = arr.length - 1;

    while (left <= right) {

        if (Math.abs(arr[left]) > Math.abs(arr[right])) {
            ans[index] = arr[left] * arr[left];
            left++;
        } else {
            ans[index] = arr[right] * arr[right];
            right--;
        }

        index--;
    }

    return ans;
};