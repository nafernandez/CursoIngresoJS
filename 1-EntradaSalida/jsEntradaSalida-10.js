/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeInicial;
	var importeDescuento;
	var descuento;

	importeInicial=document.getElementById('importe').value;
	importeInicial=parseInt(importeInicial);

	descuento=importeInicial*25/100;

	importeDescuento= importeInicial-descuento;

	document.getElementById('resultado').value=importeDescuento;

	console.log(importeDescuento);
	
}
