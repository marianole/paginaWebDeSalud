$(document).ready(function(){
  //primer hospital
$('#uno').click(function(){
  $('.popup').draggable({
      appeandTo:'body'
  });

  if($('.uno').is(":hidden") && $('.dos').is(":hidden") && $('.tres').is(":hidden") ){
    $('.uno').show();

  }
});
$('#cerrar').click(function(){
  if($('.popup').is(":visible")){
    $('.uno').hide();
  }
});
//segundo hospital
$('#dos').click(function(){
  if($('.uno').is(":hidden") && $('.dos').is(":hidden") && $('.tres').is(":hidden")){
    $('.dos').show();
  }
});
$('#cerrar2').click(function(){
  if($('.popup').is(":visible")){
    $('.dos').hide();
  }
});
//Tercer hospital
$('#tres').click(function(){
  if($('.uno').is(":hidden") && $('.dos').is(":hidden") && $('.tres').is(":hidden")){
    $('.tres').show();
  }
});
$('#cerrar3').click(function(){
  if($('.popup').is(":visible")){
    $('.tres').hide();
  }
});



});
