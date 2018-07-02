

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
    document.write('Différence en valeur OU en type<br>');
}




       

