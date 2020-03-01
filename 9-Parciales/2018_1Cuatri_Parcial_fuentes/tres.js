function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;
	var descuentoFinal;

	precio=prompt("Ingrese el precio SIN descuento: ");
	descuento=prompt("Ingrese el descuento a realizar: ");

	precio=parseInt(precio);
	descuento=parseInt(descuento);

	descuentoFinal=precio*descuento/100;

	precioFinal=precio-descuentoFinal;

	document.getElementById('elPrecioFinal').value=precioFinal;
}
