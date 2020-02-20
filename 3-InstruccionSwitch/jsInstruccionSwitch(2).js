function mostrar()
{
//tomo la edad  
	var mesDelAño;
	mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":

		alert("Abrigate que hace frio")
			break;

		case "Septiembre":	
			alert("Ya pasamos el frio, ahora calor")
			break;
		
		default:
			alert("Aun falta para el invierno")
			break;
	}




}//FIN DE LA FUNCIÓN