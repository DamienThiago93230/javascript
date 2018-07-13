//Les ANIMATIONS jQuery
$(function(){    // Déclaration d'une fonction callback qui annonce la fin d'une animation (on s'en servira plus loin) :

   function finAnim(){

       alert('Animation finie !');

   }   
   
     
   //---------------

   // Les animations FADE : fadeIn(), fadeOut(), fadeToggle() et fadeTo() :

   $('#fadein').click(function(){

       $('#rouge').fadeIn();  // fait apparaître un élément en fondu (en jouant sur l'opacité) pendant la durée spécifiée en ms. Sans argument, jQuery prend une valeur par défaut.

       $('#bleu').fadeIn(2000);  // même effet en 2s.

       $('#vert').fadeIn(1000).delay(1000).fadeOut(1000, finAnim);  // on peut enchaîner les animations les unes à la suite des autres. On appelle la fonction callback finAnim à la fin du fadeOut(). Attention : pas de () sinon elle s'exécute sans attendre l'ordre du fadeOut.

   });    
   
   
   // Au clic sur le bouton #fadeout, l'image #imageDisp disparaît en fondu de 1s :

   $('#fadeout').click(function(){

       $('#imageDisp').fadeOut(1000);

   });    // Alterner fadeIn() et fadeOut() avec fadeToggle() :

   $('#interr').click(function(){

       $('#black').fadeToggle(1000);   // alterne fadeIn() et fadeOut() en 1s

   });    
   
   
   // fadeTo() :

   $('#exo1').click(function(){

       $('#orange').fadeTo(2000, 0.2);

       $('#violet').fadeTo(2000, 0.5);  // fait une transition jusqu'à l'opacité indiquée en 2s

   });    
   //---------------

   //Les animations SLIDE : slideDown(), slideUp() et slideToggle() :

   $('#barre').click(function(){

       //$('#rideau').slideDown(1000). slideUp(1000); // fait apparaître l'élément avec un mouvement de glissement vers le bas. Pour aller vers le haut : slideUp().        $('#rideau').stop().slideToggle(1000);   // stop permet d'arrêter une animation en cours lorsqu'on reclique avant son exécution totale (sinon les animations s'exécutent autant de fois que de clics), et enchaîne sur l'animation suivante.

   });    


   //---------------

   //Les animations ANIMATE :

   // Les animations de type "animate" agissent sur les propriètés CSS numériques telles que le positionnement top, left, right, bottom, ou encore les tailles, l'opacité, etc. Comme par défaut les éléments HTML ont une position "static" en CSS, nous sommes obligés de leur mettre une position "relative" ou "absolute" pour pouvoir les déplacer avec animate().

   // animation 1 : une animation simple :
   $('#anim1').click(function(){
        $('#un').animate({top : '-200px'}, 1000); // Les propriétés CSS se mettent dans un objet entre accolades ( et entre guillemets si elles contient un tiret). -200px est exprimé par rapport à la position d'origine de l'élément. Notez que l'on n'est pas obligeé de préciser "px" car c'est l'unité par défaut
   });

   // Animation 2 : 2 propriétés CSS dans la mmême animation :
   $('#anim2').click(function(){
        $('#deux').animate({top : '-143px', left : '100px'}, { duration : 1000, easing : 'linear'}); // On obtient une diagonale entre la position d'origine et la position finale : -143px et 100px sont par rapport à la position d'origine. On peut mettre les option de l'animation dans un seconde objet entre des {}. "duration" = durée en ms, "easing" = accélération/ralentisement de l'animation (valeur "linear" ou "swing" dans la version des bases Jquery, sinon utiliser une bibliothéque complémentaire)
   });


   // Animatiion 3 : 2 animations consécutives :
   $('#anim3').click(function(){
        $('#trois').animate({ top : '+=100px', left : '+=100px' },1000)
                   .animate({ top : '-=100px', left : '+=100px' }, 1000); // On peut passer un opérateur += ou -= en valeur d'une propriété CSS dans animate(), ce qui poursuit indéfiniment l'animation = variation en relatif par rapport à la dernière position
   });


    // Animation 4 : une animation continue :
    function anim4(){
        $('#quatre').animate({ left : '400px'}, 3000)
                    .animate({ left : '0px'}, 3000, anim4); // 0px signifie 0 par rapport à la position d'origine = revient à la position d'origine. On aurait pu mettre -=400px à la place. On peut mettre une fonction callback dans animate(), elle s'exécute une fois l'animation complétement terminée. Ainsi, ici on appelle la fonction elle-même à chaque fin d'animation
    }

    $('#anim4').click(anim4); // On appelle la fonction anim4 lors du clic sur le bouton. Pas de () à celle-ci pour qu'elle attende l'ordre du click








}); // fin document ready