function mostrar()
{

	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");
	parseInt(numero);
	while(isNaN(numero))
	{
		numero = prompt("ingrese un número entre 0 y 10.");
		parseInt(numero);	
	}

	while(numero < 0 || numero > 10 )
	{
		numero = prompt("REingrese un número entre 0 y 10.");
		parseInt(numero);
	}

	document.getElementById('Numero').value = numero
}