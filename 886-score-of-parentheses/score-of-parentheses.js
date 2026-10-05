/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack = [0]; 

    for (let char of s) {
        if (char === '(') {
            // Enter a new inner layer
            stack.push(0);
        } else {
            // Exit the current layer and calculate its score
            let v = stack.pop();
            let w = stack.pop();
            
            stack.push(w + Math.max(2 * v, 1));
        }
    }

    return stack.pop();
};