class Solution {
    search(arr, x) {
        // code here
        let index = -1;
        
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === x){
                index = i;
                break;
            }
        }
        return index;
    }
}