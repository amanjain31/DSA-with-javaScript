/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let srow = 0, erow = m - 1;
    let scol = 0, ecol = n - 1;

    let arr = [];

    while (srow <= erow && scol <= ecol) {
        //top
        for (let j = scol; j <= ecol; j++) {
            arr.push(matrix[srow][j])
        }

        //right
        for (let i = srow + 1; i <= erow; i++) {
            arr.push(matrix[i][ecol])
        }


        //buttom
        for (let j = ecol - 1; j >= scol; j--) {
            if (srow === erow) {
                break;
            }
            arr.push(matrix[erow][j])
        }

        //left
        for (let i = erow - 1; i >= srow + 1; i--) {
            if (scol === ecol) {
            break;
        }
            arr.push(matrix[i][scol])
        }

        srow++;
        erow--;
        scol++;
        ecol--;
    }

    return arr;
};