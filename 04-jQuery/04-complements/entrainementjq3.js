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




























}); // Fin document ready