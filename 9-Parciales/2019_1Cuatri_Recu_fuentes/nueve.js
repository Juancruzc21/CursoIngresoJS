function mostrar()
{
	var respuesta='si';
	var contador
	var nombre
	var edad
	var sexo
	var nota
	




	contador = 0
	
	nombre = prompt("Ingrese su nombre");
	
	edad = prompt("Ingrese su edad");
	edad = parseInt(edad);
	while(isNaN(edad))
	{
		edad = prompt("error, solo numeros");
		edad = parseInt(edad);
	}
	
	while(edad < 0 ||edad > 110)
	{
		edad = prompt("Ingrese una edad valida");
		edad = parseInt(edad)
	}
	

	
	sexo = prompt("Ingrese si es F o M");
	while (!(sexo == "F" || sexo == "M")) 
	{
   	 sexo = prompt("Ingrese el sexo del alumno ('f' o 'm') para el alumno ")
    }

	nota = prompt("Ingrese la nota del alumno");
	nota = parseInt(nota);

		while(isNaN(nota))
		{
			nota = prompt("error, solo numeros");
			nota = parseInt(nota);
		}
		while(nota < 0 ||nota > 10)
		{
		nota = prompt("Ingrese una nota valida");
		nota = parseInt(nota)
		}
	
	
	while(respuesta == "si")
	{

	}






}
