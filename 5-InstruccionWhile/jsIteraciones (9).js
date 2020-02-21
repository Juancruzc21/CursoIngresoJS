function mostrar()
{

	var contador;
	var minimo;
	var maximo;
	var numeroIngresado;
	var respuesta = 'si';

	contador = 0

	while(respuesta =='si') 
	{
		contador = contador + 1;


		numeroIngresado = prompt("Ingrese el numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(contador == 1)
		{
			minimo = numeroIngresado;
			maximo = numeroIngresado;
		}
		else
		{
				if(numeroIngresado < minimo)
				{
					minimo = numeroIngresado;

				}
				if(numeroIngresado > maximo)
				{
					maximo = numeroIngresado;
				}
		}
		

	


		respuesta = prompt("Ingrese SI para continuar");
	
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;



}//FIN DE LA FUNCIÓN