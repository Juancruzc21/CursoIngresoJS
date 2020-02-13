function mostrar()
{
//tomo la edad  
	 var edad
	edad = parseInt(edad);
	edad = document.getElementById('edad').value;
	
	if(edad < 13)
	{
		alert("Usted es niño");
	}
	else
	 { 
		if(edad > 17)
		{
			alert("Usted es mayor de edad");
		}		

		else
		{
			alert("Usted es adolescente");
		}
	}
	

}//FIN DE LA FUNCIÓN