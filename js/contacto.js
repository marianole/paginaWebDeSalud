/*Hello World*/
function validarFormulario(){
    /*Esta variable representa a los caracteres validos para que sea un email*/
    var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    var mensajesError="";

    if(document.getElementById("nom_Apellido").value=='') {
        mensajesError += "Es obligatorio ingresar su nombre y apellido";

    }
    if((regexp.test(document.form.mail.value) == 0)){
        mensajesError +="El mail ingresado es incorrecto";
    }
    if((document.form.mail.value.length = 0)){
        mensajesError +="Debe ingresar un mail";
    }
    else{
        document.getElementById("mensaje").innerHTML = mensajesError;
        return false;
    }
}