
$(document).ready(function(){ 
    $("a.desplegable").click(function(){
      if($('.menuSuperior').is(":visible")){ //si les visible
          $('.menuSuperior').slideUp(); //lo oculta.
      }else{
        $('.menuSuperior').slideDown();//lo muestra
      }
    });
$(window).resize(function(){
    if($(this).width()>560){ //this es aquello que disparo el evento osea windows
        $(".menuSuperior").show();//si la resolucion es menor a 768 lo muestra
    } else{
        $(".menuSuperior").hide(); //si la resolucion es menor a 768 lo oculta
    }
});
});