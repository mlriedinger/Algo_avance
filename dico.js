function creeHeure(heure = 0, minute = 0, seconde = 0){
    return {h: heure, m: minute, s: seconde};
}

function afficheHeure(heure){
    affiche(heure.h + 'h ' + heure.m + 'm ' + heure.s + 's\n');
}

function prochaineSeconde(heure) {
   heure.s ++;
   if (heure.s == 60){
       heure.s = 0;
       heure.m ++;
       if(heure.m == 60){
           heure.m = 0;
           heure.h ++;
           if(heure.h == 24){
               heure.h = 0;
           }
       }
   }
}

function avanceHeureNbSeconde(heure, s){
    for (var i = 1; i <= s ; i++){
        prochaineSeconde(heure);
    }
}

function ajouteHeureDuree(heure, duree){
    var s = duree.h * 60 * 60 + duree.m * 60 + duree.s;
    avanceHeureNbSeconde(heure, s);
}