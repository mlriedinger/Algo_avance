/* Fonctions de tri 
    * tri par sélection
    * tri à bulle
    * tri à bulle inversé
    * tri par insertion
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

// function fusionSort(array){
//     if(array.length > 1){
//         let firstPart = array.slice(0, array.length/2);
//         let fp1 = divideArrayLeft(firstPart);
//         let fp2 = divideArrayRight(firstPart);
//         let fp11 = divideArrayLeft(fp1);
//         let fp12 = divideArrayRight(fp1);
//         let fp21 = divideArrayLeft(fp2);
//         let fp22 = divideArrayRight(fp2);

//         let secondPart = array.slice(array.length/2);
//         let sp1 = divideArrayLeft(secondPart);
//         let sp2 = divideArrayRight(secondPart);


//         console.log(firstPart);
//         console.log(fp1);
//         console.log(fp11);
//         console.log(fp12);

//         console.log(fp2);
//         console.log(fp21);
//         console.log(fp22);

//         console.log(secondPart);
//         console.log(sp1);
//         console.log(sp2);
//     }
// }


/* Fonctions complémentaires 
    * création d'un tableau aléatoire
    * permuter deux valeurs
    * rechercher un minimum
*/

function divideArrayLeft(array){
    let firstPart = array.slice(0, array.length/2);
    return firstPart;
}

function divideArrayRight(array){
    let secondPart = array.slice(array.length/2);
    return secondPart;
}

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


