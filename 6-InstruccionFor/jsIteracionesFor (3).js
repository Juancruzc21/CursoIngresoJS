function mostrar()
{

	var contador
	var repeticiones

	contador = 0
	
	repeticiones = prompt("ingrese el número de repeticiones");
	repeticiones = parseInt(repeticiones);

	while(isNaN(repeticiones))
	{
		repeticiones = prompt("ingrese un NUMERO de repeticiones");
		repeticiones = parseInt(repeticiones);	
	}

	for( ; repeticiones > contador ; contador++)
	{
		alert("Hola UTN FRA");
	}


}//FIN DE LA FUNCIÓN