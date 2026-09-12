var sortArray = function(nums) {
    return mergeSort(nums, 0, nums.length - 1);
};

function mergeSort(arr, low, high) {
    if (low >= high) return arr;
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
    return arr;
}

function merge(arr, low, mid, high) {
    let newarray = new Array(high - low + 1);
    let i = low, j = mid + 1, k = 0;

    while (i <= mid && j <= high) {
        newarray[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++];
    }
    while (i <= mid) newarray[k++] = arr[i++];
    while (j <= high) newarray[k++] = arr[j++];

    for (let x = 0; x < newarray.length; x++) {
        arr[low + x] = newarray[x];
    }
}