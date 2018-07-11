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


        //---------------------------
        // Le mot clè this :
        // this est nécessaire lorsqu'on sélectionne plusieurs éléments simultanement et qu'on a besoin d'en cibler un en particulier
        $('input').focus(function(){
            $(this).css({ border : '2px solid green'}); // this se réfère à l'input sur lequel je suis en focus précisèment, sans sélectionner l'atutre
        });

        $('input').blur(function(){
            $(this).css({ border : ''}); // Avec la méthode css() je remets la bordure à son état initial (correspondant au string vide '') de l'input duquel je viens de sortir (= this)
        });

        //----------------
        // Accéder aux propriétés CSS avec la méthode css()  (complément) :
        var position = $('#violet').css('position');

        console.log('La propriété position du div est : '+ position); // La méthode css() avec seulement une propriété sous forme de string en argument est un getter : elle fournit la valeur de la propriété spécifiée, même si celle-ci n'est pas dans un attribut style (va chercher y compris dans les feuilles de styles)


        //----------------
        // Accéder aux attributs des balises avec attr() :
        if($('.modifAlt').attr('alt') == '') { // attr() avec un seul argument est un getter : il permet de récupérer la valeur de l'attribut précisé (ici le alt)
            $('.modifAlt').attr('alt', 'paysage'); // attr() avec deux argument est un setter : il permet d'attribuer une valeur à un attribut : attr('attribut', 'valeur').
        }

        //-----------------
        // Modifier le contenu d'une balise avec text() ou html() :
        // html() équivaut à innerHTML :
        $('.texte').eq(0).html('<span>Ceci est un texte ajouté avec la méthode html()</span>'); // Les balises HTML sont interprétées et donc insérées dans le code HTML. La méthode eq() permet de cibler l'élément dont l'indice est spécifié dans les (), ici la première .texte

        // text() équivaut à textContent :
        $('.texte').eq(1).text('<span>Ceci est un texte ajouté avec la méthode text()</span>'); // Dans la méthode text() tout est considéré comme du texte brut, y compris les évebtuelles balises

        // Note : text() et html() sans arument sont des getter : il récupèrent le contenu de la balise sélectionnée.

        //----------------
        // Ajouter ou retirer une classe (définie dans le CSS) à un élément :
        $('#survol').mouseenter(function(){
            $(this).addClass('rouge'); // Ici ajoute la classe 'rouge' (prévue dans le CSS) à l'élément
        });

        $('#survol').mouseleave(function(){ 
            $(this).removeClass('rouge'); // Ici retire la classe 'rouge' à l'élément
        });

        $('#classBleu').click(function(){
            $('#survol').toggleClass('bleu');  // alterne addClass() et removeClass sur l'élément #survol (différent du bouton #classBleu : on n'utilise donc pas $(this) !)
        });

        //--------------
        // Parcourir les éléments sélectionnées avec une boucle each() :

        $('h4').each(function(indice){ // each() parcour tous les <h4> et exécute la fonction pour chacun (= each) d'entre-eux. Cette fonction possède un paramètre (= indice) qui correspond à l'indice de l'élément sur lequel la boucle se trouve

            $(this).text('Ce <h4> à pour indice le numéro ' + indice); // Ajoute le texte au <h4> sur lequel on se trouve précisément à chaque tour de boucle (= $(this))

            // on ajoute la classe "rouge" aux h4 d'indice pair :
            if( indice % 2 == 0) { // Signifie que l'indice est pair : on ajoute donc la classe "rouge" à chaque élélmentt d'indice paire
                $(this).addClass('rouge');
            }
        });

        //---------------
        // Les speudo-sélecteurs spécifique à jQuery :first, :last, :visible et :hidden

        // :visible et :hidden :
        $('#afficher').click(function(){
            $('#galerie img:hidden').css({ opacity : 0.2 }); // Sélectionne les images cachées et leur met une opacité de 0.2
            $('#galerie img').show(); // Puis on affiche toutes les images (pour voir le résultat)
        });

        $('#effacer').click(function(){
            $('#galerie img').hide(); 
        });


        // :first et :last :
        $('#afficher-premier').click(function(){
            $('#galerie img:first').show(); // Sélectionne la première image et l'affiche. Marche aussi avec :last pour la dernière. Si vous voulez cibler une image  au millieu, utilisez la méthode eq().

            // On peut combiner les deux pseudo-selecteurs :
            console.log($('#galerie img:hidden:first').attr('src') ); // On combine :hidden:first pour afficher la source de la première image cachée. Attention à l'ordre, :hidden d'abord puis :first
        });


        

        

        








}); // Fin document ready (à ne pas supprimer)

