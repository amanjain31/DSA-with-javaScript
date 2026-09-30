/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let ans = [];
    let depth = 0;

    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === '(') {
            depth++;

            // Even depth -> 0
            // Odd depth -> 1
            ans.push(depth % 2);
        } else {
            // Closing bracket ke liye pehle current depth use karo
            ans.push(depth % 2);
            depth--;
        }
    }

    return ans;
};