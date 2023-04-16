
function validar (){
	var Nombre, Apellido, Correo, Contraseña, RepetirContraseña, Teléfono, Dirección, Terminos_Condiciones, expresion, expresion1, expresion2, expresion3, expresion4,expresion5, expresion6, expresion7;
	Nombre =document.getElementById('Nombre').value; 
	Apellido =document.getElementById('Apellido').value; 
	Correo =document.getElementById('Correo').value; 
	Contraseña =document.getElementById('Contraseña').value; 
	RepetirContraseña =document.getElementById('RepetirContraseña').value; 
	Teléfono =document.getElementById('Teléfono').value;
	Dirección =document.getElementById('Dirección').value;
	Terminos_Condiciones =document.getElementById ('Terminos_Condiciones').value; 
	expresion = /\w+@\w+\.+[a-z]/;
	expresion1 = /^[a-zA-ZÁ-ÿ]{5,20}$/;
	expresion2 = /^[a-zA-ZÁ-ÿ]{5,20}$/;
    expresion3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    expresion4 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    expresion5 =/^\d{5,20}$/;
	expresion6 =/^[a-zA-ZÁ-ÿ]{5,20}$/;
	expresion7 = /^.{5,20}$/;

	

	
	if(Nombre === "" || Apellido === "" || Correo ==="" || Contraseña === "" || RepetirContraseña === "" || Teléfono === "" || FechadeNacimiento === "" || Dirección === "" ){
		alert("Los Campos Son obligatorios");
		return false; 
	}

	else if (Nombre.length>20 || Apellido.length>20 || Contraseña.length>20 || RepetirContraseña.length>20 || Teléfono.length>20 || FechadeNacimiento.length>20 || Dirección.length>20 ){
		alert("Este campo no puede superar los 20 caracteres");
		return false;
	}

	else if (!expresion1.test(Nombre)){
		alert("Nombre Incorrecto")
	}
	else if (!expresion2.test(Apellido)){
		alert("Apellido Incorrecto")
	}
	else if (!expresion3.test(Contraseña)){
		alert("Contraseña Incorrecta")
	}
	else if (!expresion4.test(RepetirContraseña)){
		alert("Confirmación de Contraseña Incorrecta")
	}
	else if (!expresion5.test(Teléfono)){
		alert("Teléfono Incorrecto")
	}

	else if (Correo.length>30){
		alert("Correo muy largo")
	}

	else if (!expresion.test(Correo)){
		alert("Correo no cumple")
	}

	else if (isNaN(Teléfono)){
		alert("El Teléfono Contiene texto")
	}
	
	else if (!expresion6.test(Dirección)){
		alert("Dirección incorrecta")
	}
	
	
}

	

