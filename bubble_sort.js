const assert = require('node:assert');

function bubbleSort(array) {
    for (i = 0; i < array.length ; i++) {
        for (c = 0 ; c < array.length - 1; c++) {
            if(array[c] > array[c + 1]) {
                temp1 = array[c]
                temp2 = array[c +1]

                array[c] = temp2
                array[c + 1] = temp1
            }
        } 
    }
    return array
}

const array = [1,7,3,2,9,0,5,8,4,6]
const esperado = [0,1,2,3,4,5,6,7,8,9]

assert.deepStrictEqual(bubbleSort(array), esperado);

// node bubble_sort.js