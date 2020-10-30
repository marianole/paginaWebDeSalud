/*Hello World*/
function validarFormulario(){
    var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    if(document.formularioCompleto.nom_Apellido.lenght==0){

        alert("Debe completar nombre y apellido")
        document.formularioCompleto.nom_Apellido.focus()
        return 0;
    }
    if ((regexp.test(document.formularioCompleto.mail.value) == 0) || (document.formularioCompleto.mail.value.length = 0)) {
        alert("Introduzca una direccion de email valida");
        document.formularioCompleto.mail.focus();
        return 0;
    }
    else {
        var c_email=true;
    }



}