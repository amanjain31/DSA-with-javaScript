/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // 2nd approch and efficent one binary search
    let first = 1, last = x, ans = 0;

    while(first <= last){
        let mid = Math.floor((first + last) / 2);

        if(mid <= Math.floor(x/mid)){
            ans = mid;
            first = mid + 1
        }else{
             last = mid - 1
        }
    }
    return ans;
};