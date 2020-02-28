function mostrar()
{
   	var nombreDelHuesped;
 	var cantidadDePersonas;
 	var cantidadDeDias;
 	var formaDePago;
 	var respuesta = "si";
 	var contador = 0
	var maximaCantidadDePersonas
	var maximaCantidadDeDias
	var mayorFormaDePago
	var contadorDeDiasPorPersona
	var contadorDePersonas
	var contadorDeForma
	var contadorDeHuesped

	// VALIDACION

	while(respuesta == "si")
	{
		contador = contador + 1

		nombreDelHuesped = prompt("Ingrese el nombre");
	 	while(!(isNaN(nombreDelHuesped)))
		{
			nombreDelHuesped = prompt("Ingrese su nombre");
		}
	 	
		cantidadDePersonas = prompt("Ingrese cantidad de personas");
	 	cantidadDePersonas = parseInt(cantidadDePersonas) 
	 	while(isNaN(cantidadDePersonas))
		{
			cantidadDePersonas = prompt("Ingrese la cantidad de personas");
		}
		cantidadDeDias = prompt("Ingrese cantidad de dias de estadia");
	 	cantidadDeDias = parseInt(cantidadDeDias)
	 	while(isNaN(cantidadDeDias))
		{
			cantidadDeDias = prompt("Ingrese la cantidad de personas");
		}
	 	
	 	formaDePago = prompt("Ingrese forma de pago (efectivo, tarjeta o QR)");
	 	while(!(isNaN(formaDePago)))
		{
			formaDePago = prompt("Ingrese su forma de pago");
		}
	 	while(formaDePago != "efectivo" && formaDePago != "tarjeta" && formaDePago != "QR")
	 	{
	 		alert("Forma de pago invalida");
	 		formaDePago = prompt("Ingrese forma de pago (efectivo, tarjeta o QR)");
	 	}
	 	
	 	respuesta = prompt("Desea agregar otro huesped?");
		
        // A PARTIR DE ACA EMPIEZA LA LOGICA

	 	if(contador == 1)
		{
			
			maximaCantidadDePersonas = cantidadDePersonas;
		}
		else
		{
			if(cantidadDePersonas > maximaCantidadDePersonas)
			{
				maximaCantidadDePersonas = cantidadDePersonas;

			}
		}

		if(contador == 1)
		{
			
			maximaCantidadDeDias = cantidadDeDias;
		}
		else
		{
			if(cantidadDeDias > maximaCantidadDeDias)
			{
				maximaCantidadDeDias = cantidadDeDias;
				contadorDeDiasPorPersona++
			}
		}

		if(contador == 1)
		{
			
			mayorFormaDePago = formaDePago;
		}
		else
		{
			if(formaDePago < mayorFormaDePago)
			{
				mayorFormaDePago = formaDePago;
				contadorDeForma++
						
			}
		}		
	}
	alert(mayorFormaDePago + " es la forma mas utilizada");
	alert(nombreDelHuesped + " Trajo una cantidad de " + maximaCantidadDeDias);

}
