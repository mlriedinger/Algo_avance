function createRandomArray(length){
    var array = [];
    for (let i=0 ; i < length ; i++){
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}

function selectionSort(array){
    for (let i =0 ; i < array.length -1 ; i++){
        let min = i;
        min = searchMinimum(array, i, min);
        switchValue(array, i, min);
    }
    return array;
}

function bubbleSort(array){
    for (let i = 0 ; i < array.length - 1 ; i++){
        for (let j = 0 ; j < array.length ; j++){
            if (array[j] > array[j+1]){
                switchValue(array, j, j+1);
            }
        }
    }
    return array;
}

function insertionSort(array){
     for (let i = 1 ; i < array.length - 1 ; i++){
        let temp = array[i];
        j = i-1;
        while(j >= 0 && array[j] > temp){
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = temp;
    }
    return array;
}

function switchValue(array, index1, index2){
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function searchMinimum(array, index, min){
    for (let j = index + 1 ; j < array.length; j++) {
        if (array[j] < array[min]){
            min = j;
        }
    }
    return min;
}


