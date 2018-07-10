// Ce fichier est en jQuery

/*
document ready :

Les deux ligne suivante ont la même signification : exécuter le code JS après avoir charger le code HTML. Par conséquent, le lien vers la page JS peut se faire n'importe où dans la page html(dans le <head> ou avant la fermeture de <body>).


$(function(){
    // Ici vous mettez tout votre code jQuery
});

Ou encore, autre syntaxe :
$(document).ready(function(){
    // Ici vous mettez tout votre code jQuery
});

*/

$(function(){ // Ce code s'exécutera une foi le document HTML totalement charger
    //-------------------------
    // Fonction principal de jQuery, alias $, sélecteur et événement
    $('#monBouton').click(function(){ // Sélectionne la balise #monBouton et au clic appelle la fonction anonyme qui suit :
        $('#carre').hide(); // Sélectionne la balise #carre et l'éfface
    });


    jQuery('#monBouton').click(function(){ 
        jQuery('#carre').hide(); 
    }); // En réalité le $ remplace le mot "jQuery" dont il est un alias. Les deux font la même chose : il créent un objet jQuery


    $('#carre').click(function(){ // Sélectionne la balise #carre et au clic => sélectionne toutes les balise h3 et les éfface (sans écrire de boucle)
        $('h3').hide();
    });


    // Le contraire de hide() c'est show() :

    $('.photo').dblclick(function(){ // Sélectionne la balise .photo et au double-clic => sélectionne la balise #carre et l'affiche en 1000 ms (= 1s)
        $('#carre').show(1000); // hide() et show() peuvent prendre un argument : une durée en ms, ou encore 'slow' ou 'fast'
    });


    // Pour alterner hide() et show() automatiquement : toggle()
    $('#interrupteur').click(function(){
        $('#on-off').toggle();
    });


    //---------------------
    // on() équivalent de addEventListener, et sont contraire off() :
    $('#monBouton').on('click', function(){
        alert('Déclenchement de la méthode on()');
    }); // on() permet d'associer un événement à un élément comme le ferait addEventListener() en JS "pur". La seul différence entre la syntaxe ligne 22 et celle-ci réside dans le fait que cette dernière marche aussi avec les éléments crées dynamiquement (= ajouter par le jQuery).
    
    $('#monBouton').off('click'); // En ajoutant cette ligne, on dissocie les clicks de l'élément #monBouton : les clics précédent liés au bouton ne fonctionne plus ! C'est un moyen simple de supprimer un événement. 


    //----------------
    // Evénement hover, moodifier du CSS depuis jQuery :
    $('#vert').hover(
        function(){
            $('#rouge').css({
                width : '300px',
                'background-color' : 'yellow'
            });
        }, 

        function(){
            $('#bleu').css({
                width : '300px',
                'background-color' : 'yellow'
            });
        });

        // L'événement hover est une combinaison de mouseover et mouseout en JS : il possède 2 fonctions anonymesqui s'exécute l'une quand on rentre, l'autre quqnd on sort de l'élément.
        // La méthode css() permet de modifier des propriétés CSS écrites dans un objet : on les met entre {} et sont séparées par une ",". Notez que les propriétés CSS qui contiennent un tiret s'écrivent dans des quotes.

        //-----------------------------
        // Récupérer ou modifier la valeur d'un input avec val() :
        $('#mdp1').change(function(){ // val() sans argument retourne la valeur saisie dans le champ #mdp1 (getter)
            var texte = $('#mdp1').val();

            $('#mdp2').val(texte); // val(argument) permet de changer la valeur du champ #mdp2 (setter)
        });




}); // Fin document ready (à ne pas supprimer)

