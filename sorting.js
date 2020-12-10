/* Fonctions de tri 
    * tri par sélection (selection sort)
    * tri à bulle (bubble sort)
    * tri à bulle inversé
    * tri par insertion / 2 méthodes (insertion sort)
    * tri comptage / 2 méthodes (couting sort)
    * tri fusion / 2 méthodes (merge sort)
    * tri rapide / 2 méthodes (quick sort)
*/

function selectionSort(array){
    for (let i =0 ; i < array.length -1 ; i++){
        let min = i;
        min = searchMinimum(array, i, min);
        switchValue(array, i, min);
        // afficheTab(array);
    }
    return array;
}

function bubbleSort(array){
    for (let i = 0 ; i < array.length - 1 ; i++){
        for (let j = 0 ; j < array.length ; j++){
            if (array[j] > array[j+1]){
                switchValue(array, j, j+1);
                // afficheTab(array);
            }
        }
    }
    return array;
}

function bubbleSortReverse(array){
    for (let i = 0 ; i < array.length - 1 ; i++){
        for (let j = 1 ; j > 0 ; j--){
            if (array[j] < array[j-1]){
                switchValue(array, j, j-1);
                // afficheTab(array);
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
        // afficheTab(array);
    }
    return array;
}

/* Autre méthode pour le tri par insertion

function insertionSortReverse(array){
    for (let i = 1 ; i < array.length - 1 ; i++){
        let temp = array[i];
        j = i;
        while(j > 0 && temp < array[j - 1] ){
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
        // afficheTab(array);
    }
    return array;
}

*/

function countingSort(array){
    let max = Math.max(...array);
    let min = Math.min(...array);
    let count = [];
    let res = [];
    let j = 0;

    for(let i = min ; i <= max ; i++){
        count[i] = 0;
    }

    for (let i = 0 ; i < array.length ; i++){
        count[array[i]] ++;
    }

    for(let i = min ; i < count.length ; i++){
        while(count[i] > 0){
            res[j] = i;
            j++;
            count[i]--;
        }
    }
    return res;
}

/* Autre méthode pour le tri comptage

function countingSortAlt(array, max){
    let count = createArray(max + 1);
    let pos = 0;

    for (let i = 0 ; i < array.length ; i++){
        count[array[i]]++;
    }

    for (let i = 0 ; i < max +1 ; i++){
        for (let j = 0 ; j <= (count[i] -1) ; j++){
            array[pos] = i;
            pos++;
        }
    }
    return array;
}

function createArray(n){
    let res = [];
    for (let i = 0 ; i < n ; i++){
        res.push(0);
    }
    return res;
}

*/

function mergeSort(array){
    // console.log(array);
    if(array.length <= 1){
        return array;
    }
    else return merge(mergeSort(array.slice(0, array.length/2)), mergeSort(array.slice(array.length/2)));
}

function merge(left, right){
    if(left.length == 0){
        return right;
    }
    else if(right.length == 0){
        return left;
    }
    if(left[0] <= right[0]){
        return [left[0]].concat(merge(left.slice(1, left.length), right));
    }
    else{
        return [right[0]].concat(merge(left, right.slice(1, right.length)));
    }
}


/* Autre méthode pour le tri fusion 

function merge(left, right){
  
    var tab = [], l = 0, r = 0;

    while (l < left.length && r < right.length){
        if (left[l] < right[r]){
            tab.push(left[l++]);
        } else {
            tab.push(right[r++]);
        }
    }
    return tab.concat(left.slice(l)).concat(right.slice(r));
}

function sort(tab){

    if (tab.length < 2) {
        return tab;
    }

    var mid = Math.floor(tab.length / 2),
        right = tab.slice(mid),
        left = tab.slice(0, mid),
        p = merge(sort(left), sort(right));
    
    p.unshift(0, tab.length);
    tab.splice.apply(tab, p);
    return tab;
}

*/ 

function quickSort(array, left = 0, right = array.length -1){
    if(left < right){
        let pivot = left;
        for (let i = left ; i < right ; i++){
            if(array[i] < array[right]){
                switchValue(array, i, pivot);
                pivot ++;
            }
        }
        switchValue(array, pivot, right);
        quickSort(array, left, pivot -1);
        quickSort(array, pivot + 1, right);
    }
    return array;
}

/* Fonctions complémentaires 
    * création d'un tableau aléatoire
    * permuter deux valeurs
    * rechercher un minimum
*/

function createRandomArray(length){
    var array = [];
    for (let i=0 ; i < length ; i++){
        array.push(Math.floor(Math.random() * 100));
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


