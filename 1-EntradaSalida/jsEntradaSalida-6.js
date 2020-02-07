/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var PrimerNumero;
	var SegundoNumero;
	var Suma;
	PrimerNumero= document.getElementById('numeroUno').value;
	SegundoNumero= document.getElementById('numeroDos').value;

	PrimerNumero= parseInt(PrimerNumero);
	SegundoNumero=parseInt(SegundoNumero);
	Suma= PrimerNumero+SegundoNumero;
	alert("Hice tu cuenta y...");
	alert("Tu resultado es " + Suma);

//Parse int se utiliza para devolver un NUMERO, habiendo recibido previamente un valor (sea numero o letra),SIEMPRE va como en este ejemplo



}

