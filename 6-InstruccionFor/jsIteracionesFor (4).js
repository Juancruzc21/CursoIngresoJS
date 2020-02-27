function mostrar()
{

	var contador;		
	var respuesta

	contador = 0
	respuesta = "BREAK"

	for(  ; respuesta = prompt("Ingrese") ; contador++ )
	{
		if(respuesta == "BREAK")
		{
			break; 
		}
		console.log(contador);
		
	}


}//FIN DE LA FUNCIÓN