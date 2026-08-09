var sortColors = function(nums) {
    function findPivotIdx(arr, first, last) {
        let pivot = arr[first];

        let i = first + 1;
        let j = last;

        while (i <= j) {
            while (i <= last && arr[i] <= pivot) i++;
            while (j > first && arr[j] >= pivot) j--;

            if (i < j) {
                swap(arr, i, j);
            }
        }

        swap(arr, first, j);

        return j;
    }

    function quickSort(arr, first, last) {
        if (first >= last) return;

        let pIdx = findPivotIdx(arr, first, last);

        quickSort(arr, first, pIdx - 1);
        quickSort(arr, pIdx + 1, last);
    }

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    quickSort(nums, 0, nums.length - 1);
};