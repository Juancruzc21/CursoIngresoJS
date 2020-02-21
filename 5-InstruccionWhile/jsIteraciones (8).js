function mostrar()
{
	
	var contador;
	var positivo;
	var negativo;
	var numeroIngresado;
	var respuesta='si';

	contador = 0;
	acumulador = 0;
	negativo=1;
	positivo=0;
	
	/* var test;

	test=isNaN(1);
	test=isNaN("1");
	test=isNaN("dlalalal"); */ 




	while(respuesta == 'si')
	{
		contador = contador + 1;
		
		numeroIngresado = prompt("Ingrese el numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("ingrese un NUMERO");
			numeroIngresado = parseInt(numeroIngresado);	
		}


		if(numeroIngresado > 0)
		{
			positivo = positivo + numeroIngresado;
		}
		if(numeroIngresado < 0)
		{
			negativo = negativo * numeroIngresado;
		}

		respuesta = prompt("Ingrese SI para continuar");
	}

	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN