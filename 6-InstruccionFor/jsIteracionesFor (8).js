function mostrar()
{

	var numeroIngresado;
	var i;
	var bandera;

	bandera = 0;
	numeroIngresado = prompt("Ingrese numero");

	for(i=2 ; i < numeroIngresado ; i++)
	{
		if(numeroIngresado % i == 0)
		{
			bandera = 1		
			break;
		}
	}
	
	if(bandera != 1)
	{
		alert("el primo es " + numeroIngresado);
	}


}//FIN DE LA FUNCIÓN