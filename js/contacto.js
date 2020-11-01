/*Hello World*/
function validarFormulario(){
    /*Esta variable representa a los caracteres validos para que sea un email*/
    var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    var mensajesError="";

    if(document.getElementById("nom_Apellido").lengt==0){
        mensajesError+="Es obligatorio ingresar su nombre y apellido";
    }else{
        document.getElementById("mensaje").innerHTML=mensajesError;
        return false;
    }
}