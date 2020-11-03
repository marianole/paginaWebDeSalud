


function validacion(){
  var mensajeDeError="";
  var divContenedor=document.getElementById('contenedor');
  var error=true;

  var nombreYapellido=document.getElementById('NombreYapellido').value;
  if(!nombreYapellido){
    mensajeDeError+="<p>Falta completar el campo nombre y apellido</p>";
    error=false;
  }

  var dni=document.getElementById('documento').value;
  if(!dni){
    mensajeDeError+="<p>Falta completar el campo dni</p>";
    error=false;
  }

  var telefono=document.getElementById('telefono').value;
  if(!telefono){
    mensajeDeError+="<p>Falta completar el campo telefono</p>";
    error=false;
  }

  var sexo=document.getElementsByName('sexo');
  var prueba=false;

  for(i in sexo){
    if(sexo[i].checked){
        prueba=true;
        }
  }

   if(prueba==false){
     mensajeDeError+="<p>Elija un opcion en el campo sexo</p>";
     error=false;
   }

   var prueba2=false;
   var viajes=document.getElementsByName('viajes');

   for(var i in viajes){
     if(viajes[i].checked){
       prueba2=true;
     }
   }

   if(prueba2==false){
     mensajeDeError+="<p>Responda si a viajado</p>";
     error=false;
   }

   var prueba3=false;
   var fiebre=document.getElementsByName('fiebre');

   for(var i in fiebre){
     if(fiebre[i].checked){
       prueba3=true;
     }
   }

   if(prueba3==false){
     mensajeDeError+="<p>Responda si tuvo fiebre fiebre</p>";
     error=false;
   }

   var prueba4=false;
   var dolorDeCabeza=document.getElementsByName('DolorDeCabeza');

   for(var i in dolorDeCabeza){
     if(dolorDeCabeza[i].checked){
       prueba4=true;
     }
   }

   if(prueba4==false){
     mensajeDeError+="<p>Responda si tuvo dolor de cabeza</p>";
     error=false;
   }

   var prueba5=false;
   var tos=document.getElementsByName('tos');

   for(var i in tos){
     if(tos[i].checked){
       prueba5=true;
     }
   }

   if(prueba5==false){
     mensajeDeError+="<p>Responda si ha tenido tos</p>";
     error=false;
   }

   var prueba6=false;
   var dolorDeGarganta=document.getElementsByName('dolorDeGarganta');

   for(var i in dolorDeGarganta){
     if(dolorDeGarganta[i].checked){
       prueba6=true;
     }
   }

   if(prueba6==false){
     mensajeDeError+="<p>Responsa si ha tenido dolor de garganta</p>";
     error=false;
   }

   var prueba7=false;
   var respirar=document.getElementsByName('respirar');

   for(var i in respirar){
     if(respirar[i].checked){
       prueba7=true;
     }
   }

   if(prueba7==false){
     mensajeDeError+="<p>Responda si ha tenido dificultad para respirar</p>";
   }



  divContenedor.innerHTML=mensajeDeError;
  divContenedor.style.color="red";
  return error;
}






function opcion(){

  var opciones=document.getElementsByName('viajes');
var labelRara=document.getElementById("labelP");
var select=document.getElementsByName('paises');


  for(var i in opciones){
    if(opciones[i].checked && opciones[i].value=="mostrar"){
      labelRara.style.display="flex";
      select[0].style.display="flex";
      select[0].style.width="100%";
      break;
    }else{
      labelRara.style.display="none";
      select[0].style.display="none";
      break;
    }
  }

}


function mostrarOcultar(){

  var opciones=document.getElementsByName('respirar');
var labelD=document.getElementById("labelD");
var direccion=document.getElementById('direccion');


  for(var i in opciones){
    if(opciones[i].checked && opciones[i].value=="mostrar"){
      labelD.style.display="flex";
      direccion.style.display="flex";
      direccion.style.marginBottom="15px";

      break;
    }else{
      labelD.style.display="none";
      direccion.style.display="none";
      break;
    }
  }

}



