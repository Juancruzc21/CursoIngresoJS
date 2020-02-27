function mostrar()
{
	var numeroIngresado
	var contador = 0;
	var respuesta = "si";
	var sumaDePositivos = 0;
	var sumaDeNegativos= 0;
	var contadorDePositivos = 0;
	var contadorDeNegativos = 0;
	var contadorDeCeros = 0;
	var contadorPares = 0;

	while(respuesta == "si")
	{
		
		contador++;

		numeroIngresado = prompt("Ingrese el numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error, solo numeros");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado > 0)
		{
			sumaDePositivos += numeroIngresado;
			contadorDePositivos++

		}
		else if(numeroIngresado < 0)
		{
			sumaDeNegativos += numeroIngresado;
			contadorDeNegativos++;
		}
		else{
			contadorDeCeros++;
		}

		if(0 == numeroIngresado % 2 && numeroIngresado != 0){
			contadorPares++;
		}
		respuesta = prompt("Ingrese SI para continuar");
	
	}

	var promedioDeNegativos = sumaDeNegativos / contadorDeNegativos;
	var promedioDePositivos = sumaDePositivos / contadorDePositivos;
	var diferencia = sumaDePositivos + sumaDeNegativos;

	document.write("Suma de negativos: " + sumaDeNegativos + "<br>Suma de positivos: " + sumaDePositivos + "<br>Cantidad de negativos: " + contadorDeNegativos + "<br>Cantidad de positivos: " + contadorDePositivos + "<br>Cantidad de ceros: " + contadorDeCeros + "<br>Cantidad de pares: " + contadorPares + "<br>Promedio de positivos: " + promedioDePositivos + "<br>Promedio de negativos: " + promedioDeNegativos + "<br>Diferencia entre positivos y negativos: " + diferencia);


}//FIN DE LA FUNCIÓN