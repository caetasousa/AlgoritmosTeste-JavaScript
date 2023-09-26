const assert = require("assert")

function ordena(array) {
    
    for(i = 0; i < array.length; i++) {
        inicio = i
        while(inicio > 0) {
            if(array[inicio -1] > array[inicio]) {
                temp1 = array[inicio - 1]
                temp2 = array[inicio]

                array[inicio - 1] = temp2
                array[inicio] = temp1
            }
            inicio--
        }
    }
    return array
}
const array = [1,7,3,2,9,0,5,8,4,6]
const esperado = [0,1,2,3,4,5,6,7,8,9]

assert.deepStrictEqual(ordena(array), esperado)

// node insertion_sort.js