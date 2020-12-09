/* Lundi 07/12

var tab = [3, 9, 7, 1, 6, 2, 8, 4, 5];
var essai = creeTab(5);

affiche("Coucou \n");
afficheTab(tab);
afficheTab(essai);
permuteCase(tab, 1, 4);
afficheTab(tab);
affiche(nbDePlusPetit(tab, 4) + '\n');

var midi = creeHeure(12, 0, 0);
var fin = creeHeure(16, 59, 59);
var soir = creeHeure(23, 59, 59);
var duree = creeHeure(1, 30, 0);
afficheHeure(midi);
afficheHeure(fin);

prochaineSeconde(midi);
afficheHeure(midi);

prochaineSeconde(fin);
afficheHeure(fin);

prochaineSeconde(soir);
afficheHeure(soir);

avanceHeureNbSeconde(soir, 60);
afficheHeure(soir);

ajouteHeureDuree(midi, duree);
afficheHeure(midi);

*/

/* Lundi 07/12 - Algo de tri */

let array1 = createRandomArray(10);
affiche("Original : " + array1 + '\n');
affiche("Tri par sélection : " + selectionSort(array1) + '\n\n');

let array2 = createRandomArray(10);
affiche("Original : " + array2 + '\n');
affiche("Tri à bulle : " + bubbleSort(array2) + '\n\n');

let array3 = createRandomArray(10);
affiche("Original : " + array3 + '\n');
affiche("Tri par insertion : " + insertionSort(array3) + '\n\n');



/* Mardi 08/12 - Récursivité */

// var minuit = creeHeure();
// afficheHeure(minuit);

// avanceHeureNbSecondeRec(minuit, 60);
// afficheHeure(minuit);

// affiche('4! = ' + fact(4) + '\n');

/* Détails de factorielle de 4 

fact(4)
4 > 0, donc on retourne 4 * résultat de fact(3)
3 > 0, donc on retourne 3 * résultat de fact(2)
2 > 0, donc on retourne 2 * résultat de fact(1)
1 > 0, donc on retourne 1 * résultat de fact(0)
0 == 0, donc on retourne 1

Donc on peut réaliser le calcul : 4 * 3 * 2 * 1 * 1 = 24

*/

// affiche('fibo(8) = ' + fibo(8)+ '\n');
// affiche('fibo(13) = ' + fibo(13)+ '\n');

/* Détails de Fibonacci de 8 

fibo(8)
8 > 0, donc on retourne le résultat de fibo(7) + fibo(6) = 13 + 8
7 > 0, donc on retourne le résultat de fibo(6) + fibo(5) = 8 + 5
6 > 0, donc on retourne le résultat de fibo(5) + fibo(4) = 5 + 3
5 > 0, donc on retourne le résultat de fibo(4) + fibo(3) = 3 + 2
4 > 0, donc on retourne le résultat de fibo(3) + fibo(2) = 2 + 1
3 > 0, donc on retourne le résultat de fibo(2) + fibo(1) = 1 + 1
2 > 0, donc on retourne le résultat de fibo(1) + fibo(0) = 1 + 0
1 == 1, donc on retourne 1
0 == 0, donc on retourne 0

Donc on peut faire le calcul : 13 + 8

*/

// affiche('syracuse(15) : ') ; syracuse(15);
// affiche('syracuse(5) : ') ; syracuse(5);
// affiche('syracuse(12) : ') ; syracuse(12);

// affiche('pgcd(21, 72) : ' + pgcd(21, 72) + '\n');
// affiche('pgcd(12, 4) : ' + pgcd(12, 4) + '\n');
// affiche('pgcd(33, 14) : ' + pgcd(33, 14) + '\n');

/* Détails du pgcd (plus grand commun diviseur)

A    B       R(=A % B)
21 = 72 * 0     21
72 = 21 * 3     9
21 = 9  * 2     3
9  = 3  * 3     0
3  = 0  * ..

*/

// affiche('Nb de \'o\' dans coucou : ' + occurence('coucou', 'o') + '\n');
// affiche('Nb de \'t\' dans anticonstitutionnellement  : ' + occurence('anticonstitutionnellement ', 't') + '\n');

// affiche('4! = ' + factTerm(4) + '\n');

/* Détails de la factorielle avec une récursivité terminale

factTerm(4, res=1)
4 > 0, donc on rappelle factTerm(3, res*n -> 1*4 = 4)
3 > 0, donc on rappelle factTerm(2, res*n -> 3*4 = 12)
2 > 0, donc on rappelle factTerm(1, res*n -> 12*2 = 24)
1 > 0, donc on rappelle factTerm(0, res*n -> 24*1 = 24)
0 == 0 donc on renvoie res = 24

*/

// affiche('fibo(8) = ' + fiboTerm(8)+ '\n');

/* Détails

fibo(5, res=1, temp=0)
5 > 0 donc on rappelle fiboTerm(4, res = res + temp = 1, temp = res = 1)
4 > 0 donc on rappelle fiboTerm(3, res = res + temp = 2, temp = res = 1)
3 > 0 donc on rappelle fiboTerm(2, res = res + temp = 3, temp = res = 2)
2 > 0 donc on rappelle fiboTerm(1, res = res + temp = 5, temp = res = 3)
1 == 1 donc on renvoie res = 5


*/