

//----------------------------------
// 1- Commentaires
//----------------------------------

// Pour écrire un commentaire sur une seul ligne.

/*
  Pour écrire des commentaires sur plusieurs lignes.
*/

//----------------------------------
// 1- Affichage
//----------------------------------

// document.write('mon premier message');  // affichage dans le navigateur.

document.write('<h1><i class="fab fa-node-js"></i> Les bases du JavaScript <i class="fab fa-node-js"></i></h1>');  // on peut mettre des balises HTML, elles sont interprétées et donc insérées dans le HTML.

// Toutes les instructions en JS se finissent par un ";". Elles se suivent et sont effectuées les unes à la suite des autres, du HAUT vers le BAS du script.

//-------
// Les boites de dialogue :
// alert('Salut');  // affiche un message.
// confirm('Etes-vous sûr ?');  // message avec boutons de confirmation "ok" ou "annuler".
// prompt('Quelle est votre code postale ?'); // message avec champ à remplir.

//-------
// Afficher dans la console :
console.log('Attention aux erreurs de syntaxes dans ma console');  // message écrit dans la console de debugage (F12 + onglet Console).

//----------------------------------
// 3- Variables - déclaration -  affectation
//----------------------------------
document.write('<h2> Variables - déclaration - affectation</h2>');
// Définition : une variable est un espace mémoire nommé dans lequel nous allons stocker une donnée, une valeur. Cette donnée peut etre de n'importe quel type : chiffre, chaine de caracteres, une balise HTML ect...

// Déclaration d'une variable :
var maBoite;  // le mot clé var permet de déclarer (= créer) la variable nommée maBoite.

// Règle de nommage des variables : caractères acceptés : A â Z, a â z, 0 â 9 (jamais au début), _(jamais au début ni à la fin). Premier mot en minuscule, puis majuscul à la 1ère lettre de chaque mot.

//----------
// Affectation d'une variable :
maBoite = 10; // on affect une valeur à une variable avec le signe "=". maBoite contient donc 10

document.write(maBoite); // on affiche le contenu de la variable en ne mettant de quote autour de son nom. Affiche 10

var maBoite = 10;  // on peut déclare et affecter une variable en même temp (nous retiendrons cette écriture)

//---------
monAutreBoite = 'Bonjour';  // cette écritue est possible (déclaration sans le mot clé var), mais ce n'est pas conventionnel. De plus, dans une fonction cela n'a pas la même signification (voir chapitre "Portée des variables")

document.write('<br>');

//----------
// Déclarer et affecter plusieurs variables en même temps :
var prenom = 'Sylvie',
    nom = 'Robert',
    genre = 'féminin'; // Un seul var en séparant chaque déclaration par une virgule, un saut de ligne et une indentation. On termine par un ";".

document.write(prenom);  // affiche Sylvie
document.write('<br>');

//-------
// Changer la valeur d'une variable :
prenom = 'Pierre'; // Nous changeons la valeur initiale 'Sylvie' pour la remplacer par 'Pierre'

document.write(prenom);
document.write('<br>');

prenom = nom; // Nous affectons la valeur de la variable nom à la variable prenom, autrement on remplace "Pierre" par "Robert"

document.write(prenom);// Affiche "Robert"
document.write('<br>');

//---------
// Ajouter une valeur à la valeur déjà existante d'une variable :
var fruit = 'Pomme ';
fruit += 'Fraise';// On ajoute la chaine de caractères "Fraise" à "Pomme" déjà existante dans la variable fruit avec l'opérateur += (sans espace)

document.write(fruit);// Affiche "Pomme Fraise"
document.write('<br>');

//--------
// Utiliser prompt avec une variable :
var codePostal = prompt('Quel est votre code postal ?');

document.write(codePostal);// Affiche le code postal indiqué par l'internaute
document.write('<br>');

//----------------------------------
// 4- Types de données
//----------------------------------
document.write('<h2> Types de données </h2>');

// Nous commençons par les 3 principaux types de données dits primitifs :

// Les types numériques appelés NUMBER :
var chiffre = 20;  // Les numbers s'écrivent sans quotes ni guillemets
// Tous les types numériques sont possibles : entiers, décimaux, positifs, négatifs...

// Les types chaînes de caractéres appellés STRING :
var texte = "Phrase entre guillemets";
var apostrophe = 'il faut utiliser le caractére d\'échappement pour les apostrophes dans des quotes';  // altGr + 8 pour les caractère d'échappement
// Les quotes ou les guillemets indiquent qu'il sagit d'un type String.

var numero = '10';  // Un chiffre dans des quotes ou des guillemets est interprété comme un string

// Le type booléen (ou boolean) :
// Le type booléen ne prend que 2 valeurs : TRUE et FALSE
var choix = true;  // S'écrit SANS quotes


//----------
// typeof permet de vérifier le type d'une variable :
document.write(typeof(chiffre));  // number
document.write('<br>');

document.write(typeof(texte));  // STRING
document.write('<br>');

document.write(typeof(numero));  // STRING
document.write('<br>');

document.write(typeof(choix));  // BOOLEAN
document.write('<br>');

//----------------------------------
// 5- Constante
//----------------------------------
document.write('<h2> Constante </h2>');

// Définition : les constantes sont comme des variables dont la valeur NE PEUT PAS étre modifiée. Elles permettent de "proteger" cette valeur nécaissaire au bon fonctionnement du script.
const CHANGE_PAS = 'ma constante impossible à modifier' // Par convention entre développeurs on écrit les constante en majuscul et avec un "_" si besoin
document.write(CHANGE_PAS); // affiche le contenu de la constante
document.write('<br>');

// CHANGE_PAS = 'autre valeur';  // Erreur bloquante de type invalid assignement to const CHANGE_PAS


//----------------------------------
// 6- Concaténation
//----------------------------------
document.write('<h2> Concaténation </h2>');

// En JS, on fait suivre une variables et des strings avec le symbole "+". On parle de concaténation
var prenom = 'Bruce',
    nom = 'Wayne' ;

document.write(prenom + ' ' + nom + '<br>');  // Concaténe la variable prenom avec un espace avec la variable nom avec une balise <br>

var personnage = prenom + ' ' + nom +'<br>';  // On peut concaténer des éléments au sein d'une variable
document.write(personnage);

//----------------------------------
// 7- Opérateur arithmétiques
//----------------------------------
document.write('<h2> Opérateur arithmétiques </h2>');

var resultat;

resultat = 10 + 5; // Addition
resultat = 10 - 5; // Soustraction
resultat = 10 * 5; // Multiplication
resultat = 10 / 5; // Division
resultat = 3 % 2;  // Modulo = reste de la division entière. Si j'ai 3 billes réparties sur 2 personne, il m'en reste 1 seule : 3%2 vaut donc 1 (modulo de 2 pour vérifier si un chiffre est paire ou impaire, modulo de 10 si c'est une dizaine, ...)

//--------
// On peut appliquer les opérateurs aux varibles :
var chiffre1 = 10,
    chiffre2 = 5;
resultat = chiffre1 + chiffre2;  // resultat vaut 15

var chiffre3 = 10;
chiffre3 = chiffre3 + 5; // 15
chiffre3 = chiffre3 + 5; // 20 mais cett syntaxe n'est pas conventionnelle. On utilise la syntaxe suivante :
chiffre3 += 5; // cette syntaxe fait la même chose que la précédente, mais c'est elle que l'on retiendra. ciffre3 vaut ici 25

//Fonctionne avec tout les opérateurs : +=, -=, *=, /=, et %=

//----------
// Incrémenter et décrémenter :
var i = 0;
i++; // Incrémenter i de +1(++). i vaut donc 1
i--; // Décrémenter i de -1(--). i vaut donc 0

// i++ et ++i ont le même resultat à la seul différence près :
// i++ retourne(fourni) la valeur de i AVANT d'effectuer l'operation
// ++i retourne la valeur de i APRES avoir éffectuer l'operation

var x = 5;
var y = x++; // y prend la valeur de 5 PUIS x passe à 6

document.write('y vaut ' + y + ' ' + '/'); // 5
document.write('x vaut ' + x + ' ' + '/'); // 6

x = 5;
var z = ++x;  // x passe à 6 PUIS z prend la valeur de 6
document.write('z vaut ' + z + ' ' + '/' );  // 6
document.write('x vaut ' + x);  // 6
document.write('<br>');


//--------
// Exercice :
/*
 L'internaute a acheté 0.8kg de pommes  et 0.7kg de poires.
 Vous déclarez 4 variables, une qui contient "pommes", une qui contient "poires", une qui contient le poids des pommes et une qui contient le poids des poires.
 Puis affichez la phrase "Vous avez acheteé des pommes et des poires pour un poids total de 105kg." où les fruits et le total sont remplacés par les variables.
*/

var fruits1 = 'pommes';
var poids1 = 0.8;
var fruits2 = 'poires';
var poids2 = 0.7;

var resultat = poids1 + poids2;

document.write('<p>Vous avez acheté des '+fruits1+' et des '+fruits2+' pour un poids total de '+resultat+' kg. </p>');


//----------------------------------
// 8- Conditions 
//----------------------------------
document.write('<h2> Conditions  </h2>');

var a = 10,
    b = 5,
    c = 2;

//---------
// La condition if / else :
if ( a > b) {
    // Si la condition est évaluée à true, on rentre dans les accolades qui suivent :
   document.write('a est supérieur à b <br>');
} else {
    // Sinon... si la condition est évaluée à false, on exécute le else :
   document.write('b est supérieur ou égal à a');
}

//--------
// if avec AND :
if ( a > b && b > c){
    // Si a est supérieur à b ET que en même temps b est supérieur à c, on rentre dans les accolades qui suivent :
   document.write('Ok pour les 2 conditions <br>');
}

//------
// if avec OR :
if( a == 9 || b > c ){
    // Si a est égal (==) à 9 OU alors que b est supérieur à c, on rentre dans les accolades qui suivent :
   document.write('Ok pour au moins une dés deux conditions <br>');
}

//--------
// if... else if... else :
if( a == 8){
    // Si a vaut 8, on éxcute ce qui suit :
    document.write('a est égal à 8');
} else if ( a != 10){
    // Sinon si a est différent de 10, on éxecute ce qui suit :
    document.write('a est différent de 10');
} else {
    // Sinn, c'est que je ne suis tombé ni dans le if, ni dans le else if, je me trouve donc dans le else :
    document.write('Les 2 conditions sont fausses <br>');
}

// NOTES : Jamais de () aprés un else. Le else n'est pas obligatoire si il est vide. En revanche, aprés un if il y a toujours une condition.

// L'opérateur NOT :
// L'opérateur NOT qui s'écrit "!" permet d'inverser quelque chose de TRUE en FALSE, ou quelque chose de FALSE en TRUE. Il s'agit d'une négation.

var test = 3 < 1;
console.log('test vaut : ' + test); // Pour vérifier que test est FALSE

if(!test){
    // Le "!" est une négation qui inverse le sens du booléen : test seul valant FALSE, !test vaut donc TRUE. La condition finale étant donc évaluée a TRUE? On rentre dans les accolades :
    document.write('On exécute ce code...<br>');
}

// Conclusion : les instructions d'une condition seront toujours exécutées que si la condition renvoie TRUE.


//---------
// La comparaison avec le double égal"==" :
var varA = 1, // number
    varB = '1'; // string

if( varA == varB ){
    // varA et varB valent tous les deux 1 en VALEUR : la condition avec le "==" est donc vraie. On exécute les accolades qui suivent :
    document.write('Egalité en valeur uniquement<br>');
}else{
    document.write('Différence en valeur uniquement<br>');
}
// -------------------------------------------
// La comparaison avec le triple égal"===" :
if( varA === varB ){
    // Comparaison en valeur ET en type avec le triple "===". Ici nous avons un string et un number, il n'y a donc pas strict égalité entre les deux variables : on va dans le else
    document.write('Egalité en valeur ET en type<br>');
}else{
    document.write('Différente en valeur OU en type<br>');
}

//-------
// Condition dite ternaire :
// La conditon ternaire est une autre syntaxe de la condition if...else.
var voiture = 'BMW';

var origine = (voiture == 'BMW') ? 'Origine allemande <br>' : 'autres origne <br>'; // La condition ternaire s'écrit avec une "?" qui remplace le if, et un ":" qui remplace le else

document.write(origine);

//------------
// isNaN :  is Not a Number
// NaN pour Not a Number est une valeur utilisée pour représenter une "quantité" qui n'est pas un nombre en JavaScript.

// Les opérateurs d'égalité ( == ou === ) ne peuvent pas être utilisés pour tester si une valeur est NaN. Il faut utiliser isNaN() :

var annee = '2018'; // string
if( isNaN(annee) ){
    // Condition fausse car '2018' après conversion est bien un number, on rentre donc dans lae else    
    document.write('Ce n\'est pas un number après conversion. <br>');
}else{
    document.write('C\'est un number après conversion. <br>');
}

// Le contraire ici : 
var annee = 'Juin 2018'; // string
if( isNaN(annee) ){
     // Ici la condition est vraie. On rentre donc ici :
    document.write('Ce n\'est pas un number après conversion. <br>');
}else{
    document.write('C\'est un number après conversion. <br>');
}

//----------
// Exercice :
/* Demandez l'age de l'internaute dans un prompt.
   Si la reponse est vide (on compare aves des quote vides SANS espace), on affiche "Vous n'avez pas repondu."
   Si la reponse n'est pas un nombre, on affiche "Vous n'avez pas indiqué un nombre."
   Si la reponse est correcte, on affiche "Vous avez indiqué avoir un X ans." ou X est l'age donné par l'internaute
*/

var age = prompt('Quel est votre age ?');

if( age == ''){
    document.write('Vous n\'avez pas repondu.');
}else if (isNaN (age) ){
    document.write('Vous n\'avez pas indiqué un nombre.');
}else{
    document.write('Vous avez indiqué avoir '+ age +' ans.');
}


//----------------------------------
// 9- Synthèse des opérateurs 
//----------------------------------
document.write('<h2>Synthèse des opérateurs</h2>');

// Pour tester des variables entre-elles :
/*
  == pour égal en valeur
  != pour différent de valeur

  === pour strictement égal en valeur ET en type
  === pour strictement différent en valeur OU en type

  > pour plus grand que
  < pour plus petit que
  >= pour supérieur ou égal
  <= pour inférieur ou égal

*/

// Les opérateur logique
/*
   && pour AND
   || pour OR
   !  pour NOT (négation)

   Les opération efféctuées avec des opérateur logiques ne donnent que 2 resultats possibles : TRUE ou FALSE.

   Exemples :
       true && true  => true
       true && false => false
       false && false => false

       true || true => true
       true || false => true
       false || false => false

       !true => false
       !false => true
*/


//----------------------------------
// 10- Condition switch 
//----------------------------------
document.write('<h2>Condition switch</h2>');
// La condition switch est une autre syntaxe pour écrire une condition if...else, if...else, lorsque l'on veut comparer une variable à une multitude de valeur

var couleur = 'jaune';

switch (couleur) {
    case 'bleu' : // Chaque case représente une valeur que peut prndre la variable. Si couleur contient 'bleu', on exécute le code qui suit ce case :
        document.write('Vous aimez le bleu <br>');
    break; // Obligatoire pour quitter la condition une fois exécuter
    case 'rouge' : 
        document.write('Vous aimez le rouge <br>');
    break;
    case 'vert' : 
        document.write('Vous aimez le vert <br>');
    break;
    default : // On tombe dans default par défaut si on n'entre dans aucun case précédent
        document.write('Vous n\'aimez aucune de ces couleurs.');
    break;  
}

//----------------------------------
// 11- Les boucles 
//----------------------------------
document.write('<h2> Les boucles </h2>'); 
// Les boucles sont destinées à répèter des ligne de codes de façon automatique

// While :
var i = 0; // On initialise une variable à 0 pour compter le nombre de tours de boucle

while ( i <= 5){ // ici entre paranthèses se situe la condition d'entrée dans la boucle while. Elle signifie "tant que i est inférieur ou égal à 5"
    document.write(i + '---');
    //......
    i++; // on acrémente i de +1(++ ajoute 1 a i) on n'oublie pas d'incrémenter pour ne pas créer de boucle infinie
}

document.write('<hr>');
// Exerice : Sans modifier la condition de la boucle while précédente, vous la compléter pour ne pas afficher les "---" aprés le 5

var i = 0;  // On n'oublie pas de réinitialiser i sinon il conserve la valeur 6 de la boucle précédente

while ( i <= 5){ 
if ( i <= 4){
    document.write(i + "---");
}else{
    document.write(i);
}
    i++;
}
document.write('<hr>');
//--------
// La boucle for :
// La boucle for est une autre syntaxe de la boucle while :
for( i = 0; i <= 5; i++) { // On met dans les () du for : initialisation de la variable suivie d'un ";", puis la condition d'entrée dans la boucle suivi d'un ";", puis l'incrémentation (ou décrémentation...) NON suvi d'un ";"
    document.write(i + '---');
}
document.write('<hr>');
//---------
// Exercice : afficher un menu deroulant avec les années de 1900 à 2020. Utilisez la boucle for
//-----------------exemple 01------------------------------
document.write('<select>');
        document.write('<option>1900</option>');
        document.write('<option>...</option>');
        document.write('<option>2020</option>');
document.write('</select>');


//-----------------fin exemple 01------------------------------

//-----------------exemple 02------------------------------
document.write('<select>');
    for( i = 1900; i <= 2020; i++) { 
        document.write('<option>' + i + '</option>');
    }  
document.write('</select>');

//-----------------fin exemple 02------------------------------

//-----------------exemple 03------------------------------
// Alternative : 
 var affichage = '';  // Pour contenir toutes les balises HTML à venir
 affichage += '<select>';
    for( i = 1900; i <= 2020; i++) { 
        affichage += '<option>' + i + '</option>';
    }  
affichage += '</select>';
console.log(affichage);
document.write(affichage); // On affiche tout le string qui contient l'ensemble des balises du sélecteur
//-----------------fin exemple 03------------------------------

// LA boucle do...while éxiste aussi. Elle à la particularité de s'éxecuter au moins sune fois (correspondant au "do"), puis seulement à la fin on regarde la condition du while pour savoir si on retourne dans la boucle ou pas. Exemple d'utilisation : vous posez une question obligatoire a l'internaute ("do"), puis tant qu'il n'a pas correctement répondu ("while"), vous lui reposé la question.

//----------------------------------
// 12- Les fonction utilisateurs 
//----------------------------------
document.write('<h2> Les fonction utilisateurs </h2>');

// Des fonctions sont des morceaux de code encapsulés dans des accolades et portant. Elle sont appelées (par leur nom) quand on a besoin d'éxecuter tout le code qui s'y trouve. Il est d'usage de faire des fonctions simple qui réalise des actions unitaires.


// A chaque fois qu'on répète une action, voir si il n'est pas possible de la mettre dans une fonction : cela s'appel factoriser son code.

// Il éxiste deux façon de déclarer une fonction en JS :
    // 1° Avec le mot clé function :
        function maFonction (){
            // ici tout votre code
            document.write('<p>Nous avons une journée ensoleillée.</p>');
        }

    // 2° Avec le mot clé var :
        var maFonction2 = function(){
            // ici tout votre code
            document.write('<p>Nous avons une journée de pluie.</p>');
        }
// Pour qu'une fonction s'exécute il faut l'appeller :

maFonction(); // On appel une fonction en écrivant sont nom suivie d'une paires de parenthéses
maFonction2(); // En appelant cette fonction, j'exécute le code qui s'y trouve

// Paar convention nous déclarons toujours une fonction avant de l'exécuter.

//----------
// Fonction avec paramètres :
function direBonjour(prenom, nom){  // prenom et nom sont des paramétres de la fonction séparés par une "," et qui attent une valeur
    document.write('<p>Bonjour ' + prenom + ' ' + nom + ', comment allez-vous ?</p>');
}

direBonjour('Alice', 'Dupont'); // La valeur "Alice" qui est en première position va être affectée au paramétre prénom, et la valeur "Dupont" (en seconde position) va être afféctée au paramétre nom. Ainsi la fonction direBonjour peut afficher un méssage personnalisé.

//-------------

function d (param){
    document.write( param + '<br>');
}
d('test de notre fonction');

//---------
// Préambule à l'exercice :
// function meteo(saison) {
//     d('Nous sommes en ' + saison);// Nous avons la possibilitéd'utiliser une autre fonction, ici d(), dans les instructions de cette fonction
// } 

// meteo('été');
// meteo('printemps');

// Exercice réecrivez la fonction précédente dans une fonctionexo météo, et completez la pour qu'elle affiche "au printemps", "en été", "eu automne", ou "en hiver". Dans cet exercice, vous ne modifiez pas le paramétre saison et vous n'en ajoutez pas.

function exoMeteo(saison){
    if(saison == 'printemps'){
        d('Nous sommes au ' + saison + '.');
    }else{
        d('Nous sommes en ' + saison + '.');
    }
}
    
exoMeteo('été');
exoMeteo('printemps');
exoMeteo('automne');
exoMeteo('hiver');

//-----------
// Le mot clé "return" qui permet de sortir une valeur d'une fonction :
function somme(a, b){
    var resultat = a + b;
    return resultat; // Permet de SORTIR la valeur de resultat de la fonction : il retourne cette valeur à l'endroit où la fonction est appellée
}
d('La somme de 2 + 4 est égal à ' + somme(2 , 4)); // On récupère la valeur 6 de resultat grâce au return qui se trouve dans la fonction somme()


//----------------------------------
// 13- La portée des variables 
//----------------------------------
document.write('<h2> La portée des variables </h2>');

/* Selon l'endroit et la façon dont une variable est déclarée, elle pourra être accessible partout dans le script ou uniquement dans une portion limitée du code des fonctions. On parle de portée variable (scope en anglais).

    - Une variable déclarée SANS le mot clé var (fionction implicite) : elle est accessible PARTOUT dans le script, y compris au sein des fonction : elle est dite GLOBAL.

    - Une variable déclarée AVEC le mot clé var (fonction explicite) :
            - à l'exterieur d'une fonction elle sont GLOBALE, donc accessible partout dans le script, y compris au sein des fonction
            - à l'intérieur d'une fonction elle sera LOCALE, donc accéssible uniquement DANS cette fonction.
*/

var animal = 'loup'; // GLOBALE
function jungle(){
    var animal = 'tigre'; // LOCALE
    return animal;
}

d(animal); // Loup car on est dans l'éspace GLOBALE et qu'on utilise la variable globale disponible qui vaut loup
d(jungle()); // Tigre grâce au return qui se trouve à la fin de la fonction : il sort la valeur TIGRE de la variablen locale de la fonction
d(animal); // Loup pour les même raisons que la premier

//---------
d('<hr>');

var oiseau ="aigle"; // GLOBAL
function ciel(){
    oiseau = 'faucon';// GLOBAL
    return oiseau;
}

d(oiseau); // Aigle car on utilise la premier variable disponnible qui vaut aigle
d(ciel()); // Faucon   grâce au return de la fonction. MAIS en éxecutant celle-ci on a changé le contenu de la variable globale pour y mettre faucon !
d(oiseau); // par conséquent la variable oiseau contient désormais Faucon


//----------------------------------
// 14- Les arrays
//----------------------------------
document.write('<h2> Les arrays (tableau) </h2>');

// Un arrays ou tableau en français, est un objet qui contint plusieur valeur, appelées items ou éléments. Chaque éléments est accessible au moyen d'indice (ou index) dont la numérotation commence à partir de 0.

// Déclaration d'un array :
var monTableau = ['Emilie', 'Magalie', 'Zakir','Elric', 96]; // Déclaration d'un array qui contient des strings et un number (version conventionnel la plus utilisée). Chaque élément a un indice : Emilie le 0, Magalie le 1, Zakir le 2, Elric le 3, 96 le 4.

// Accéder a un élément de l' array :
d(monTableau [0]); // Affiche l'élément de valeur 'Emilie'.

// Remplacer la valeur "Elric" par la valeur "Alphonse" :
monTableau[3] = 'Alphonse'; // On modifie la valeur positionnée à l'indice 3 pour y mettre Alphonse
d(monTableau[3]); // Affiche Alphonse 

// Mesurer le nombre d'éléments d'un array :
d(monTableau.length); // Affiche 5 correspondants aux nombres d'éléments du tableau

// Parcourir un array avec une boucle for :

for( var i = 0; i < monTableau.length; i++ ) { 
    d(monTableau[i]); // La variable i prend successivement les valeurs de 0 à 4 inclus. monTableau[i] permet donc de parcourir chaque indice de 0 à 4.
}

//--------
// Array mutidimensionnel :
// Un array multidimenssionnel est un tableau qui contient un ou plusieurs autres tableaux.
var deuxDimenssions = [ ['Fraises', 'Pommes', 'Bananes'] , ['Tomates', 'Carrottes', 'Courgettes'] ];

d(deuxDimenssions[0][2]);

d(deuxDimenssions[1][0]);// Pour accéder à la valeur "bananes", je vais d'abord a l'indice 0 du tableau deuxDimensions, puis a l'intérirur je vais a l'indice 2.




document.write(deuxDimenssions[0][2] +' et des '+ deuxDimenssions[1][0]); // Affiche bananes suivi de carottes
document.write('<br>');

//-----------
// Exercice créer un array avec les tailles S, M, L et XL. A l'aide d'une boucle for, afficher un menu déroulant avec les tailles provenant de l'array' à l'intérieur.

var mesTailles = ['S', 'M', 'L', 'Xl'];

document.write('<select>');
    for( i = 0; i < mesTailles.length; i++) { 
        document.write('<option>' + mesTailles[i] + '</option>');
    }  
document.write('</select>');
document.write('<br>');
//------------------Fin exercice 1---------------------------------


// var p = ' est une équipe de ';
// var foot = [ ['Paris', 'Juventus', 'Réal Madrid'] , ['Liga BBVA', 'Ligue 1', 'Serie A'] ];
// d(foot[0][0] + p + foot[1][1]);
// d(foot[0][1] + p + foot[1][2]);
// d(foot[0][2] + p + foot[1][0]);

// document.write('<br>');
// //------------------Fin exercice 2---------------------------------


// var mesEquipe = ['Paris', 'Juventus', 'Réal Madrid', 'Man United'];

// d('<select>');
//     for( i = 0; i < mesEquipe.length; i++) { 
//         d('<option>' + mesEquipe[i] + '</option>');
//     }  
// d('</select>');
//------------------Fin exercice 3---------------------------------

//----------
// Ajouter ou supprimer des valeurs au début ou à la fin d'un array :
mesTailles.push('XXL');  // Ajoute "XXL" à la fin de l'array mesTailles
console.log(mesTailles);

mesTailles.unshift('XS'); // Ajoute "XS" au début de l'array mesTailles
console.log(mesTailles);

// Le contraire de push , c'est pop :
mesTailles.pop(); // Retire le dernier élément de l'array mesTailles
console.log(mesTailles);

// Le contraire de unshift, c'est shift :
mesTailles.shift(); // Retire le premier élément de l'array mesTailles
console.log(mesTailles);


//----------------------------------
// 15- Les objets
//----------------------------------
document.write('<h2> Les objets </h2>');

/* Un objet est un ensemble de propriétés qui corresponde a l'assosiation d'un nom et d'une valeur, cette valeur peut être de n'importe qu'elle types (string, number, booléen, array, objet ...).

De plus, la valeur de la propriété peut être une fonction. Dans ce cas cette propriété s'appelle une méthode (il s'agit simplement d'une fonction dans un objet).

Les propriétés et le méthodes d'un objet s'appellent les "menbres" de cet objet.
*/

// Création d'un objet :

var personnage = {
        nom : 'Tintin', // La paire "propriété : valeur" suivie d'une ",".
        animal : 'chien',
        amis : ['haddock','Tournesol', 'Dupont & Dupond'],
        age : 35 // Par convention pas de "," au dernier élément.
    }; // On termine bien l'instruction avec un ";".

// Accéder à la valeur d'une propriété d'un objet :
d(personnage.nom); // Affiche Tintin. On accède à une propriété d'un objet en écrivant le nom de l'objet puis un "." puis la propriété.
d(personnage['nom']); // Affiche aussi Tintin. On peut utiliser la notation entre [] pour accéder à une propriété d'un objet.

// Remplissage d'une propriété :
personnage.animal = 'Milou'; // Change la valeur de la propriété animal pour y mettre "Milou";
// Ou encore : 
personnage['animal'] = "Milou";

// Pour afficher Tournesol qui se trouve dans un array(tableau) :
d(personnage.amis[1]); // Pour accéder a "Tournesol", on va à la propriété "amis" de personnage avec un "." puis on va à l'indice [1] du tableau qui s'y trouve.
d(personnage['amis'][1]); // De la m^éme maniere qu'avec Milou, je peux utiliser la notation entre[] pour accéder à la propriété "amis".

//------------
// Création d'un objet avec une méthode :
var maVoiture = {
        marque : 'Mercedes',
        couleur : 'noire',
        motorisation : {
            energie : 'diesel',
            puissance : "110CV",
            garantie : true
        },
        afficherOrigine : function (maVoiture) { // afficherOrigine est une méthode de maVoiture
            document.write('Origine Allemande <br>');
        }
    };

// On identifie les méthodes au mot clé fonction qui permet d'y mettre le code qu'elles doivent exécuter ( tout comme une fonction)

d(maVoiture.marque); // Affiche Mercedes
d(maVoiture.couleur); // Affiche Mercedes
maVoiture.afficherOrigine(); // Appel de la méthode afficherOrigine() de l'objet maVoiture écrite avec sa paire de (). Affiche "Origine Allemande".
d(maVoiture.motorisation['energie']); // ces 2 sythaxes pour accéder à la propriété energie qui se situe dans la propriété motorisation de l'objet maVoiture. Affiche Diesel
d(maVoiture.marque + " " + maVoiture.couleur + " " +maVoiture.motorisation.energie + " " + maVoiture.motorisation.puissance);
d('<hr>')
//---------
// La boucle for in :
// La boucle for in permet de parcourir les objets et de récupérer tousz les membres (= information) qui y sont contenue.

// Pour l'exemple, nous allons parcourir l'objet qui s'appel maVoiture.motorisation :
for(var membre in maVoiture.motorisation) {
        d(membre + ' a pour valeur ' + maVoiture.motorisation[membre]);
} // membre s'appel un "référent" : c'est sa place dans la synthaxe du for...in qui détermine que "membre" récupère le nom des propriétés à chaque tour de boucle. Ainsi, maVoiture.motorisation[membre] permet de récupérer la valeur correspondante à la propriété contenue dans "membre". Note : on ne met pas de quote à membre dans les [] car il s'agit d'une variable.

//----------------------------------
// 16- Propriété et méthodes de l'objet string
//----------------------------------
document.write('<h2> Propriété et méthodes de l\'objet string </h2>');

// Propriété lenght :
animal = 'Loup';
d(animal.length);  // Affiche 4 (les 4 lettres du mot loup) soit le nombre de caractères du string contenue dans la variable animal.

// Méthode trim() :
var adresse = '     16 rue de Seine     ';
d('adresse avec les éspaces : ' + adresse.length); // Longueur y compris les éspaces
d('adresse sans les éspaces : ' + adresse.trim().length); // La méthode trim() supprimr les éspaces en début et fin de chaine (utile pour néttoyer les données d'un formulaire).

// Notez qu'une méthode comprte toujours des ().

//----------------
// Trouvez des ressources sur le net :
// Le site de référence du JS: MDN
// https://developer.mozilla.org/

// Pour aller plus loin :
// https://openclassrooms.com/
// https://www.codecademy.com/    cours, forum, exercices
// https://www.w3schools.com/



