function validacionDeFormulario(){ 

    /* CONSIGNA:  
    1)  Nombre y apellido no puede estar vacío.

    2)  El email deberá ser validado con una expresión regular.

    3)  Teléfono se debe validar el formato de 8 dígitos e incluir un guion medio
        entre el cuarto y quinto número en caso de que el usuario lo ingrese, si no lo
        ingresa no se deben realizar validaciones.

    4)  Consulta, se debe limitar a 1000 caracteres y mostrar la cantidad de
        caracteres restantes en tiempo real.*/

    var error = false; 
    var nombre = document.getElementById("nom_Apellido");
    var mail = document.getElementById("mail");
    var regexMail= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var telefono = document.getElementById("telf");
    var regexTelefono = /^[0-9]{4}[-]{1}[0-9]{4}$/;
    var mensajesError="";



   if ((nombre.value=='')){ //El campo nombre NO DEBE estar vacio
        error = true; //si esto es asi entonces debo mostrar un mensaje de error
        mensajesError+= "<p>* El campo nombre y apellido no puede estar vacio</p>" 
    }

    if ((mail.value == '')){ //el campo mail NO DEBE estar vacio
        error = true; 
        mensajesError+= "<p>* El campo del mail no puede estar vacio</p>"
    }

   else if (!regexMail.test(mail.value)){ //El campo mail debe contener una expresion regular
        error = true; 
        mensajesError+= "<p>* Ese formato de email no es disponible</p>"
    }

    if ((telefono.value == '')){ //El campo telefono NO DEBE estar vacio
        error = true;
        mensajesError+= "<p>* El campo del telefono no puede estar vacio </p>";
    }

   else if (!regexTelefono.test(telefono.value)){ //el campo telefono debe contener el formato solicitado
        error =true;
        mensajesError+= "<p>* El telefono debe contener el siguiente formato 0000-0000 </p>";

    }

    if (!contarCaracteres()){
        error =true;
    }

    if (error){
        
        document.getElementById("mensajeDeError").innerHTML=mensajesError;
        return false;
    } else {
        return true;
    }
    

}


function contarCaracteres() {
    var caracteresMaximosPermitidos = 1000;
    var cantidadDeLetrasDelValueDeLaConsulta = document.getElementById("consulta").value.length;
    var caracteresRestantes = (caracteresMaximosPermitidos - cantidadDeLetrasDelValueDeLaConsulta); //esto me va a dar los caracteres disponibles que me quedan 

    if (caracteresRestantes < 0) { //si tengo 0 caracteres disponibles. me va a saltar un aviso
        document.getElementById("cantidad").innerHTML = '<p class="excedio"; >*Has excedido el limite de caracteres </p>';
        return false;
    } else {
        document.getElementById("cantidad").innerHTML = caracteresRestantes + " caracteres restantes";
        return true;
    }


}
