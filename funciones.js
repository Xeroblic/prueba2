
function Vrut(){
    var rut =  document.getElementById("rut").value;
    var comprueba = Rut(rut);
    var opciones = document.getElementById("identificacion").value;

    
    if(opciones==="0"){
        if(opciones==="0" && comprueba){
            document.getElementById("rut").value = rut;
            document.getElementById("verificacion-rut").innerHTML = "";
        }else{
            document.getElementById("rut").value = null;
            document.getElementById("verificacion-rut").innerHTML = "Rut no valido.";
        }
    }
    else if(opciones==="1"){
            document.getElementById("verificacion-rut").innerHTML = "";
    }
    else{
        document.getElementById("rut").value = null;
        document.getElementById("verificacion-rut").innerHTML = "Seleccione un elemento de la lista.";
    }
}

function mostrarCampo(){
    var elemento1 = document.getElementById("campo-rut");
    var elemento2 = document.getElementById("campo-pasaporte");
    var opciones = document.getElementById("identificacion").value;

    if(opciones === "0"){
        elemento2.style.display="none";
        elemento1.style.display="block";

    }else if(opciones === "1"){
        elemento1.style.display="none";
        elemento2.style.display="block";
    }
}


function Vnombre(){
    var nombre = document.getElementById("nombre").value;
    var largo = nombre.length;
    
    if(largo >= 3 && largo <= 20){
        document.getElementById("nombre").value = nombre;
        document.getElementById("verificacion-nombre").innerHTML = "";
    }
    else{
        document.getElementById("nombre").value = null;
        document.getElementById("verificacion-nombre").innerHTML = "Largo debe ser entre 3 y 20 caracteres.";
    }
}

function Vappaterno(){
    var appaterno = document.getElementById("appaterno").value;
    var largo = appaterno.length;
    
    if(largo >= 3 && largo <= 20){
        document.getElementById("appaterno").value = appaterno;
        document.getElementById("verificacion-appaterno").innerHTML = "";
    }
    else{
        document.getElementById("appaterno").value = null;
        document.getElementById("verificacion-appaterno").innerHTML = "Largo debe ser entre 3 y 20 caracteres.";
    }
}

function Vapmaterno(){
    var apmaterno = document.getElementById("apmaterno").value;
    var largo = apmaterno.length;
    
    if(largo >= 3 && largo <= 20){
        document.getElementById("apmaterno").value = apmaterno;
        document.getElementById("verificacion-apmaterno").innerHTML = "";
    }
    else{
        document.getElementById("apmaterno").value = null;
        document.getElementById("verificacion-apmaterno").innerHTML = "Largo debe ser entre 3 y 20 caracteres.";
    }
}


function Vemail(){
    var email = document.getElementById("email").value;
    var largo = email.length;

    if(largo > 0 && email.indexOf("@") > -1){
        document.getElementById("email").value = email;
        document.getElementById("verificacion-email").innerHTML = "";
    }
    else if(largo == 0){
        document.getElementById("email").value = null;
        document.getElementById("verificacion-email").innerHTML = "Campo obligatorio, debe escribir un correo.";
    }
    else{
        document.getElementById("email").value = null;
        document.getElementById("verificacion-email").innerHTML = "El correo electrónico debe contener el carácter @.";
    }
}


function Vdireccion(){
    var direccion = document.getElementById("direccion").value;
    var largo = direccion.length;

    if(largo>0){
        document.getElementById("direccion").value = direccion;
        document.getElementById("verificacion-direccion").innerHTML = "";
    }
    else{
        document.getElementById("direccion").value = null;
        document.getElementById("verificacion-direccion").innerHTML = "Campo obligatorio.";
    }
}

function Vcomuna(){
    var comuna = document.getElementById("comuna").value;
    var largo = comuna.length;

    if(largo>0){
        document.getElementById("comuna").value = comuna;
        document.getElementById("verificacion-comuna").innerHTML = "";
    }
    else{
        document.getElementById("comuna").value = null;
        document.getElementById("verificacion-comuna").innerHTML = "Campo obligatorio.";
    }
}

function Vmarca(){
    var marca = document.getElementById("marca").value;
    var largo = marca.length;

    if(largo>0){
        document.getElementById("marca").value = marca;
        document.getElementById("verificacion-marca").innerHTML = "";
    }
    else{
        document.getElementById("marca").value = null;
        document.getElementById("verificacion-marca").innerHTML = "Campo obligatorio.";
    }
}

function Vmodelo(){
    var modelo = document.getElementById("modelo").value;
    var largo = modelo.length;

    if(largo>0){
        document.getElementById("modelo").value = modelo;
        document.getElementById("verificacion-modelo").innerHTML = "";
    }
    else{
        document.getElementById("modelo").value = null;
        document.getElementById("verificacion-modelo").innerHTML = "Campo obligatorio.";
    }
}

function Vanio(){
    var anio = document.getElementById("anio").value;

    if(anio>=1900 && anio<=2023){
        document.getElementById("anio").value = anio;
        document.getElementById("verificacion-anio").innerHTML = "";
    }
    else{
        document.getElementById("anio").value = null;
        document.getElementById("verificacion-anio").innerHTML = "Año debe ser válido (1900-2023).";
    }
}

function Vgenero(){
    var sexo = document.getElementById("sexo").value;

    if(sexo!=''){
        document.getElementById("sexo").value = sexo;
        document.getElementById("verificacion-genero").innerHTML = "";
    }
    else{
        document.getElementById("verificacion-genero").innerHTML = "Debe seleccionar un elemento de la lista.";
    }
}

function Vcelular(){
    var celular = document.getElementById("celular").value;
    var largo = celular.toString().length;

    if(largo >= 9 && largo <= 12){
        document.getElementById("celular").value = celular;
        document.getElementById("verificacion-celular").innerHTML = "";
    }
    else{
        document.getElementById("celular").value = null;
        document.getElementById("verificacion-celular").innerHTML = "Largo celular debe ser entre 9 y 12 digitos.";
    }
}


function verificarFormulario() {
    // Obtenemos los valores de los campos.
    var rut = document.getElementById("rut").value;
    var nombre = document.getElementById("nombre").value;
    var appaterno = document.getElementById("appaterno").value;
    var apmaterno = document.getElementById("apmaterno").value;
    var sexo = document.getElementById("sexo").value;
    var celular = document.getElementById("celular").value;
    var email = document.getElementById("email").value;
    var direccion = document.getElementById("direccion").value;
    var comuna = document.getElementById("comuna").value;
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var anio = document.getElementById("anio").value;
    var comentarioAdicional = document.getElementById("comentario").value;
  
    // Verificamos si todos los campos están completos.
    if (rut && nombre && appaterno && apmaterno && sexo && celular && email && direccion && comuna && marca && modelo && anio) {
        // Si están completos, completamos el campo comentario con los datos.
        document.getElementById("comentario-obligatorio").innerHTML = "";
        document.getElementById("miCuadroEmergente").style.display = "block";
        var comentario = "RUT: " + rut + "\n" +
                      "Nombre: " + nombre + "\n" +
                      "Apellido Paterno: " + appaterno + "\n" +
                      "Apellido Materno: " + apmaterno + "\n" +
                      "Sexo: " + sexo + "\n" +
                      "Celular: " + celular + "\n" +
                      "Email: " + email + "\n" +
                      "Dirección: " + direccion + "\n" +
                      "Comuna: " + comuna + "\n" +
                      "Marca: " + marca + "\n" +
                      "Modelo: " + modelo + "\n" +
                      "Año: " + anio + "\n" +
                      "Comentario adicional: " + comentarioAdicional;
        document.getElementById("contenido").innerHTML = comentario;
    }
    else{   
        document.getElementById("comentario-obligatorio").innerHTML = "Debe rellenar todos los campos requeridos antes de enviar el formulario";
    }
}

  function cerrarCuadroEmergente() {
    document.getElementById("miCuadroEmergente").style.display = "none";
  }
  


function revisarDigito( dvr )
  {	
      dv = dvr + ""	
      if ( dv != '0' && dv != '1' && dv != '2' && dv != '3' && dv != '4' && dv != '5' && dv != '6' && dv != '7' && dv != '8' && dv != '9' && dv != 'k'  && dv != 'K')	
      {		
          document.getElementById("verificacion-rut").innerHTML = "Debe ingresar un digito verificador valido";		
          window.document.form1.rut.focus();		
          window.document.form1.rut.select();		
          return false;	
      }	
      return true;
  }
  
  function revisarDigito2( crut )
  {	
      largo = crut.length;	
      if ( largo < 2 )	
      {		
          document.getElementById("verificacion-rut").innerHTML = "Debe ingresar el rut completo";		
          window.document.form1.rut.focus();		
          window.document.form1.rut.select();		
          return false;	
      }	
      if ( largo > 2 )		
          rut = crut.substring(0, largo - 1);	
      else		
          rut = crut.charAt(0);	
      dv = crut.charAt(largo-1);	
      revisarDigito( dv );	
  
      if ( rut == null || dv == null )
          return 0	
  
      var dvr = '0'	
      suma = 0	
      mul  = 2	
  
      for (i= rut.length -1 ; i >= 0; i--)	
      {	
          suma = suma + rut.charAt(i) * mul		
          if (mul == 7)			
              mul = 2		
          else    			
              mul++	
      }	
      res = suma % 11	
      if (res==1)		
          dvr = 'k'	
      else if (res==0)		
          dvr = '0'	
      else	
      {		
          dvi = 11-res		
          dvr = dvi + ""	
      }
      if ( dvr != dv.toLowerCase() )	
      {		
        document.getElementById("verificacion-rut").innerHTML = "El rut ingresado es incorrecto";		
          window.document.form1.rut.focus();		
          window.document.form1.rut.select();		
          return false	
      }
  
      return true
  }
  
  function Rut(texto)
  {
      var tmpstr = "";	
      for ( i=0; i < texto.length ; i++ )		
          if ( texto.charAt(i) != ' ' && texto.charAt(i) != '.' && texto.charAt(i) != '-' )
              tmpstr = tmpstr + texto.charAt(i);	
      texto = tmpstr;	
      largo = texto.length;	
  
      if ( largo < 2 )	
      {		
          document.getElementById("verificacion-rut").innerHTML = "Debe ingresar el rut completo.";		
          window.document.form1.rut.focus();		
          window.document.form1.rut.select();		
          return false;	
      }	
  
      for (i=0; i < largo ; i++ )	
      {			
          if ( texto.charAt(i) !="0" && texto.charAt(i) != "1" && texto.charAt(i) !="2" && texto.charAt(i) != "3" && texto.charAt(i) != "4" && texto.charAt(i) !="5" && texto.charAt(i) != "6" && texto.charAt(i) != "7" && texto.charAt(i) !="8" && texto.charAt(i) != "9" && texto.charAt(i) !="k" && texto.charAt(i) != "K" )
           {			
              document.getElementById("verificacion-rut").innerHTML = "El valor ingresado no corresponde a un rut valido.";			
              window.document.form1.rut.focus();			
              window.document.form1.rut.select();			
              return false;		
          }	
      }	
  
      var invertido = "";	
      for ( i=(largo-1),j=0; i>=0; i--,j++ )		
          invertido = invertido + texto.charAt(i);	
      var dtexto = "";	
      dtexto = dtexto + invertido.charAt(0);	
      dtexto = dtexto + '-';	
      cnt = 0;	
  
      for ( i=1,j=2; i<largo; i++,j++ )	
      {		
          //alert("i=[" + i + "] j=[" + j +"]" );		
          if ( cnt == 3 )		
          {			
              dtexto = dtexto + '.';			
              j++;			
              dtexto = dtexto + invertido.charAt(i);			
              cnt = 1;		
          }		
          else		
          {				
              dtexto = dtexto + invertido.charAt(i);			
              cnt++;		
          }	
      }	
  
      invertido = "";	
      for ( i=(dtexto.length-1),j=0; i>=0; i--,j++ )		
          invertido = invertido + dtexto.charAt(i);	
  
      window.document.form1.rut.value = invertido.toUpperCase()		
  
      if ( revisarDigito2(texto) )		
          return true;	
  
      return false;
  }


