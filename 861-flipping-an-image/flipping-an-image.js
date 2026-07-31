/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for(let i = 0; i < image.length; i++){
        let arr = image[i];

        let s = 0;
        let e = arr.length - 1;

        while(s < e){
            [arr[s], arr[e]] = [arr[e], arr[s]];
            s++;
            e--;
        } 
    }

    for(let i = 0; i < image.length; i++){
        for(let j = 0; j < image[i].length; j++){
            image[i][j] = image[i][j] === 1 ? 0 : 1
        }
    }

    return image;
};