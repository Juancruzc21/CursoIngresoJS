function mostrar()
{
	var numeroIngresado
	var contador;
	var respuesta = "si";
	var positivo
	var negativo

	contador = 0;
	positivo = 0;
	negativo = 0;

	while(respuesta == "si")
	{
		
		contador = contador + 1;

		numeroIngresado = prompt("Ingrese el numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("error, solo numeros");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado > 0)
		{
			positivo = positivo + numeroIngresado;
		}
		if(numeroIngresado < 0)
		{
			negativo = negativo +
		}





		respuesta = prompt("Ingrese SI para continuar");
	
	}




}//FIN DE LA FUNCIÓN