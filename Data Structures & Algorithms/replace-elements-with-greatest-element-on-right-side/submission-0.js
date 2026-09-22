class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let p = arr.length -1;
        for(let i = 0; i < arr.length; i++){
            let number = 0;
            let rightPointer = p
            while(i<rightPointer){
                number = Math.max(number,arr[rightPointer])
                rightPointer--
            }
           
            arr[i] = number
            if (i === p)  arr[p] = -1

        }
        return arr
    }
}

/**
 * [2,4,5,3,1,2]
 * 
 * rightPointer = 6
 * 
 * 
 * leftPointer = 0
 * 
 * num[0] - > right pointer goes backwards till it = leftPointer
 */