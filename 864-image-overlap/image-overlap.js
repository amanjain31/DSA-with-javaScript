var largestOverlap = function (img1, img2) {
    let n = img1.length;
    let maxOverlap = 0;

    // Try every possible row shift
    for (let rowShift = -(n - 1); rowShift <= n - 1; rowShift++) {

        // Try every possible column shift
        for (let colShift = -(n - 1); colShift <= n - 1; colShift++) {

            let count = 0;

            // Check every cell of img1
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {

                    let newRow = i + rowShift;
                    let newCol = j + colShift;

                    // Check whether shifted position is inside img2
                    if (
                        newRow >= 0 &&
                        newRow < n &&
                        newCol >= 0 &&
                        newCol < n
                    ) {
                        // Both images have 1 at this position
                        if (img1[i][j] === 1 && img2[newRow][newCol] === 1) {
                            count++;
                        }
                    }
                }
            }

            maxOverlap = Math.max(maxOverlap, count);
        }
    }

    return maxOverlap;
};