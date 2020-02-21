function mostrar()
{

	var contador;
	var acumulador;
	var numeroIngresado;
	
	contador = 0;
	acumulador = 0;

	while(contador < 5)
	{
		contador = contador + 1;

		numeroIngresado = prompt("Ingrese el numero");
		numeroIngresado = parseInt(numeroIngresado);
			while(isNaN(numeroIngresado))
			{
				numero = prompt("ingrese un número entre 0 y 10.");
				parseInt(numero);	
			}

		acumulador = acumulador + numeroIngresado;

	}

	//console.log(contador) (vale 5)
	


	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN

// cont = cont + 1
// multiplo = multiplo * numero
