var debug ='';

function affiche(str){
    debug += str;
    document.getElementsByTagName('pre')[0].innerText = debug;
}

function afficheTab(tab){
    for (var i=0 ; i < tab.length ; i++){
        affiche(tab[i] + ' ');
    }
    affiche('\n');
}

function creeTab(nbCase){
    var res = [];
    for (var i=0 ; i < nbCase ; i++){
        res.push(0);
    }
    return res;
}

function permuteCase(tab, indice1, indice2){
    var temp = tab[indice1];
    tab[indice1] = tab[indice2];
    tab[indice2] = temp;

    return tab;
}

function nbDePlusPetit(tab, indice){
    var compt = 0;
    for (var i=0 ; i < tab.length ; i++){
        if (tab[i] < indice){
            compt ++;
        }
    }
    return compt;
}