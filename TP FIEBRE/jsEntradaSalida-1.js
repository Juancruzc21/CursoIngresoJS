//Debemos lograr mostrar un mensaje al presionar el botón  'mostrar'.
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var temperatura;
	var respuesta = "si";
	var contador
	var maximaTemperatura
	var minimaTemperatura

	contador = 0

	nombre = prompt("Ingrese su nombre");
	while(!(isNaN(nombre)))
	{
		nombre = prompt("Ingrese su nombre");
	}


	edad = prompt("Ingrese su edad");
	edad = parseInt(edad);
	while(isNaN(edad))
	{
		edad = prompt("Error, solo numeros");
		edad = parseInt(edad);
	}	
	while(edad < 0 ||edad > 110)
	{
		edad = prompt("Ingrese una edad valida");
		edad = parseInt(edad)
	}


	temperatura = prompt("Ingrese su temperatura");
	temperatura = parseInt(temperatura);
	while (temperatura > 43 || temperatura < 34) 
	{
   	 temperatura = prompt("Ingrese su temperatura corporal");
    }
	

	sexo = prompt("Ingrese su sexo");
	while (!(sexo == "F" || sexo == "M")) 
	{
   	 sexo = prompt("Ingrese el sexo del alumno ('F' o 'M') para el alumno ");
    }


	while(respuesta =='si') 
	{
		nombre = prompt("Ingrese su nombre");
		while(!(isNaN(nombre)))
		{
			nombre = prompt("Ingrese su nombre");
		}


		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);
		while(isNaN(edad))
		{
			edad = prompt("Error, solo numeros");
			edad = parseInt(edad);
		}	
		while(edad < 0 ||edad > 110)
		{
			edad = prompt("Ingrese una edad valida");
			edad = parseInt(edad)
		}


		temperatura = prompt("Ingrese su temperatura");
		temperatura = parseInt(temperatura);
		while (temperatura > 43 || temperatura < 34) 
		{
	   	 temperatura = prompt("Ingrese su temperatura corporal");
	    }
		

		sexo = prompt("Ingrese su sexo");
		while (!(sexo == "F" || sexo == "M")) 
		{
	   	 sexo = prompt("Ingrese el sexo del alumno ('F' o 'M') para el alumno ");
	    }


		contador = contador + 1;

		if(contador == 1)
		{
			minimaTemperatura = temperatura;
			maximaTemperatura = temperatura;
		}
		else
		{
				if(temperatura < minimaTemperatura)
				{
					minimaTemperatura = temperatura;

				}
				if(temperatura > maximaTemperatura)
				{
					maximaTemperatura = temperatura;
					alert(nombre + " de sexo " + sexo + " tiene la maxima temperatura, siendo esta " + maximaTemperatura);
				}
		}

		if(temperatura < 38 && edad < 12)
		{
			alert(nombre + " esta en peligro")
		}
		if (temperatura < 38 && edad < 60) {
			alert(nombre + " esta en peligro")
		}
		if(temperatura < 38 && edad == 60)
		{
			alert(nombre + " esta en peligro")
		}		
		respuesta = prompt("Ingrese SI para ver datos");	
	}

	
}

