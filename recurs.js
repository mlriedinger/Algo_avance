function avanceHeureNbSecondeRec(heure, s){
    if (s > 0){
        prochaineSeconde(heure);
        avanceHeureNbSecondeRec(heure, s - 1);
    }  
}

function fact(n){
    if (n == 0){
        return 1;
    }
    else {
        return n * fact(n-1);
    }
}

function factTerm(n, res=1){
    if (n == 0){
        return res;
    }
    else {
        return factTerm(n - 1, n * res);
    }

}

function fibo(n){
    if (n < 2){
        return n;
    }
    else {
        return fibo(n-1) + fibo (n-2);
    }
}

function fiboTerm(n, res=1, temp=0){
    if (n == 0){
        return 0;
    }
    else if (n == 1){
        return res;
    }
    else {
        return fiboTerm(n - 1, res + temp, res);
    }
}

function syracuse(n, i=0){
    affiche(n + ' ');
    if (n == 1){
        affiche('[' + i + ']' + '\n');
    }
    else if (n % 2 == 0){
        syracuse(n/2, i + 1);
    }
    else {
        syracuse(3 * n + 1, i + 1);
    }
}

function pgcd(a, b){
    if(b == 0){
        return a;
    }
    else {
        return pgcd(b, a % b);
    } 
}

function occurence(mot, lettre, i=0, compt=0){
    if(i == mot.length){
        return compt;
    }
    else {
        if (mot[i] == lettre){
           return occurence(mot, lettre, i + 1, compt + 1);
        }
        else {
            return occurence(mot, lettre, i + 1, compt);
        }

    }
}

function palindrome(mot) {
    if (mot.length <= 1) {
        return true;
      }

      let [firstLetter] = mot;
      let lastLetter = mot[mot.length - 1];

      if (firstLetter === lastLetter) {
        let stringWithoutFirstAndLastLetters = string.substring(1,string.length - 1);
        return isPalindrome(stringWithoutFirstAndLastLetters);
      } else {
        return false;
      }
}

// A compléter
function palindrome(mot, debut = 0, fin = mot.length -1, res = true){
    if(debut > fin){
        if(mot[debut] == mot[fin]){
            res = false;
        }
        return res;
    }
    else {
        return res;
    }
}

let alphaRom = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};

function rom(str, i = str.length - 1, res = alphaRom[str[i]]) {

    if(i == 0) return res;

    if(alphaRom[str[i - 1]] < alphaRom[str[i]]) return rom(str, i - 1, res - alphaRom[str[i - 1]]);
    else if(alphaRom[str[i - 1]] >= alphaRom[str[i]]) return rom(str, i - 1, res + alphaRom[str[i - 1]]);

}