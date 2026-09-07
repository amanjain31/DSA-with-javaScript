/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let ans = [];

    for(let i = 0; i < intervals.length; i++){
        let currentInterval = intervals[i];
        let previousInterval = ans[ans.length - 1];

        if(ans.length === 0 || previousInterval[1] < currentInterval[0]){
            ans.push(currentInterval);
        }else{
            ans[ans.length - 1][1] = Math.max(currentInterval[1], previousInterval[1])
        }
    }
    return ans;
};