const assert = require('node:assert');

function selectionSort(array) {
    for(i = 0; i < array.length ; i++) {
        for(c = 0; c < array.length ; c++) {
            if(array[i] < array[c]) {
                temp1 = array[i]
                temp2 = array[c]

                array[i] = temp2
                array[c] = temp1
            }
        }
    }
    return array
}
const array = [1,7,3,2,9,0,5,8,4,6]
const esperado = [0,1,2,3,4,5,6,7,8,9]

assert.deepStrictEqual(selectionSort(array), esperado);

// node selection_sort.js