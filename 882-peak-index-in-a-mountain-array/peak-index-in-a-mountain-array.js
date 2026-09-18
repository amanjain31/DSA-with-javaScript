/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length - 1;
    let indexIs = -1;

    while(start < end){
        let mid = Math.floor((start +  end) / 2);

        if(arr[mid] < arr[mid + 1]){
            start = mid + 1;
        }else{
            end = mid 
        }
    }

    return start;
};