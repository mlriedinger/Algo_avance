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
    for (let i =0 ; i < array.length -1 ; i++){     // On parcourt tout le tableau
        let min = i;                                // On détermine que la valeur minimum est égale à i

        // On appelle la méthode searchMinimum() qui va parcourir 
        // toutes les valeurs qui suivent celle de l'index actuel 
        // pour savoir s'il existe une valeur inférieure
        // et renvoie la nouvelle valeur du minimum
        min = searchMinimum(array, i, min);      
        
        // On appelle la méthode switchValue() pour permuter l'index actuel avec celui de la valeur minimum
        switchValue(array, i, min);
        // afficheTab(array);
    }
    return array;
}

function bubbleSort(array){
    for (let i = 0 ; i < array.length - 1 ; i++){   // On parcourt tout le tableau
        for (let j = 0 ; j < array.length ; j++){   // On parcourt les index qui suivent l'index actuel
            if (array[j] > array[j+1]){             // Si la valeur de l'index actuel est supérieure à celle de l'index suivant
                switchValue(array, j, j+1);         // On permute les valeurs
                // afficheTab(array);
            }
        }
    }
    return array;
}

function bubbleSortReverse(array){
    for (let i = 0 ; i < array.length - 1 ; i++){   // On parcourt tout le tableau
        for (let j = 1 ; j > 0 ; j--){              // On parcourt les index qui précèdent l'index actuel
            if (array[j] < array[j-1]){             // Si la valeur de l'index actuel est inférieure à celle de l'index précédent
                switchValue(array, j, j-1);         // On permute les valeurs
                // afficheTab(array);
            }
        }
    }
    return array;
}

function insertionSort(array){
     for (let i = 1 ; i < array.length; i++){  // On parcourt tout le tableau
        let temp = array[i];                        // On stocke la valeur actuelle du tableau à l'index i dans une variable temporaire
        j = i-1;                                    // On initialise j à i-1
        while(j >= 0 && array[j] > temp){           // Tant que j >= 0 et que la valeur actuelle à l'index j est > à la variable temporaire
            array[j+1] = array[j];                  // La valeur suivante, prend la valeur actuelle de l'index j
            j--;                                    // On décrémente j pour parcourir toutes les valeurs précédentes, puis sortir de la boucle
        }
        array[j+1] = temp;                          // On insère la valeur temporaire à l'index qui suit la dernière position de j
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
    // On récupère les valeurs max et min du tableau
    let max = Math.max(...array);                   
    let min = Math.min(...array);   
    
    let count = [];                                 // On initialise un tableau de comptage vide
    let res = [];                                   // On initialise un tableau final vide
    let j = 0;

    for(let i = min ; i <= max ; i++){              // On remplit le tableau de comptage avec des 0
        count[i] = 0;
    }

    // On parcourt le tableau de départ et
    // pour chaque valeur on ajoute 1 au tableau de comptage 
    // à l'index correspondant
    for (let i = 0 ; i < array.length ; i++){       
        count[array[i]] ++;
    }

    // On parcourt le tableau de comptage
    // Tant qu'il y a des valeurs à un index, on ajoute la valeur au tableau final
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

    // Si le tableau a une longueur de 1, on le considère comme trié et on le renvoit
    if(array.length <= 1){
        return array;
    }
    // Sinon, on rappelle mergeSort() pour diviser le tableau en 2 jusqu'à obtenir des tableaux unitaires puis on les fusionne avec merge()
    else return merge(mergeSort(array.slice(0, array.length/2)), mergeSort(array.slice(array.length/2)));
}

function merge(left, right){
    // S'il n'y a pas de tableau de gauche, on renvoit le tableau de droite
    if(left.length == 0){
        return right;
    }
    // S'il n'y a pas de tableau de droite, on renvoit le tableau de gauche
    else if(right.length == 0){
        return left;
    }
    // Si la valeur du tableau de gauche à l'index 0 est inférieure ou égale à la valeur du tableau de droite à l'index 0
    // on concatène la valeur de gauche avec le résultat du merge du reste du tableau de gauche avec celui de droite
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


