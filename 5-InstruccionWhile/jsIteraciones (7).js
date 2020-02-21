function mostrar()
{

	var contador;
	var acumulador;
	var respuesta='si';
	var numeroIngresado;

	contador = 0;
	acumulador = 0;

	while(respuesta == 'si')
	{
		contador = contador + 1;

		numeroIngresado = prompt("Ingrese el numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		/*
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("error, solo numeros");
			numeroIngresado = parseInt(numeroIngresado);
		}
		*/

		acumulador = acumulador + numeroIngresado;

		respuesta = prompt("Ingrese SI para continuar");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN