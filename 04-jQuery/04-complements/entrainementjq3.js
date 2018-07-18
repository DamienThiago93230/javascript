$(function(){

    // --------------
    // Naviguer dans le DOM :

    // Les méthodes next() et children() :
    // Au clic sur un <h3> "effacer galerie...", la galerie qui suit s'éfface :

    $('#galeries h3').click(function(){
        //$(this).next().fadeOut(1000); // La méthode next() permet de sélectionner la balise directement suivante, ici le <div.galerie> qui sui t le <h3> sur leqeul on à cliqué. Ainsi, quelque soit le <h3> cliqué, seule la balise qui le suit s'éfface. next() peut prendre un sélecteur en argument pour ne sélectionner que les balises suivantes répondant à celui-ci.

        // Cependant, on voudrait éffacer les <img> contenues dans les <div.galerie> :

        $(this).next().children('img').fadeOut(1000); // La méthode chidren() permet de sélectionner TOUS les éléments enfants directs d'une balise, ici toutes le balises <img> qui se trouve dans <div.galerie> qui suit directement le <h3> que l'on à cliqué. Sans argument, children() sélectionne les enfants direct sans distinction.
    });

    // La méthode parent() :
    // Au clic sur une image, la bordure du parent devient rouge :

    $('#galeries img').click(function(){
        $(this).parent('.galerie').css({border : '2px solid red'}); // La méthode parent() permet de sélectionner l'élément parent direct, ici le <div.galerie> dont on met la bordure rouge. Sans argument parent() sélectionne le parent direct sans distinction
    });

    // La méthode prev() (pour previous), le contraire de next() :
    $('#galeries p').click(function(){
        $(this).prev().css({ border : ''}); // prev() permet de sélectionner l'élément directement précédent, ici le <div.galerie> précédent dont on réinitialise la bordure . prev() peut prendre un sélecteur en argument pour ne sélectionner que les balises précédentes répondant à celui-ci.
    });

    // La méthode find() :
    // Au clic sur le bouton "effacer toutes les galeries", les <img> descandante de #galeries sont éffacées :
    $('button').eq(0).click(function(){
        $('#galeries').find('img').fadeOut(1000); // find() permet de sélectionner tous les descandants direct ou indirect correspondants au sélecteur précisé, ici "trouve" toutes les balises <img> qui se situent dans les balises #galeries
    });

    // Exercice "accordéon" : vous rendez fonctionelle l'accordéon du HTML : au clic sur "section1" ou "section2" ou "section3" le <div> qu'on quitte se ferme, alors que le <div> de la nouvelle s'ouvre. Utilisez la classe "on" pour ouvrir un élément, et la classe "off" pour fermer un élément.

    $('#accordion h3').click(function(){
        $('.on').addClass('off').removeClass('on');
        $(this).next().addClass('on').removeClass('off');
    });

    //-------------------------
    // Convertir un élément du DOM en objet jQuery :
    // Utile si l'on veut utiliser des méthodes de jQuery sur des éléments du DOM.

    var elementDOM = document.getElementsByClassName('galerie')[0]; // On sélectionne en JS un élément du DOM, ici le premier div.galerie
    console.log(elementDOM);

    // Puis je le transforme en élément jQuery :
    var objetJquery =  $(elementDOM); // On utilise la fonction principal jQuery, alias $, pour transformer un élément du DOM en jQuery : vous pouvez donc lui appliquer n'import quelle méthode specifique à jQuery (fadeIn, animate, ...)
    console.log(objetJquery);

    objetJquery.click(function(){
        alert('Ce <div> est un objet jQuery sur lequel on applique une syntaxe propre à JQ');
    });

    // Un objet jQuery en objet du DOM :
    var autreObjetJquery = $('.galerie'); // On sélectionne toute les classes .galerie

    // Puis je transforme cette objet jQuery en élément du DOM :
    var autreElementDOM = autreObjetJquery.get(); // get() transforme un objet jQuery en un array contenant tous les éléments du DUM
    console.log(autreElementDOM); // On voit cet array

    autreElementDOM[1].addEventListener('click', function(){ // DAns l'array, on cible un élément en mettant un indice entre crochets
        alert('Ce <div> est devenu un élément du DOM sur leqeul on applique une syntaxe propre à JS');
    });

    // 
    autreElementDOM = $('.galerie')[1]; // En utilisant la notation entre crochets, nous avaons transformé l'objet jQuery en un objet du DOM classique. Attention : on ne peut donc plus lui appliquer dse méthodes jQuery, mais uniquement du JavaScript ! Pour cibler l'indice 1 en jQuery, nous aurion utilisé eq(1) à la place de [1].

    


    




























}); // Fin document ready