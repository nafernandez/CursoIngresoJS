function mostrar()
{/*
	b) Para la gestion de un hotel,
	ingresar los siguientes datos validados de una reserva
	nombre del huesped
	cantidad de personas
	cantidad de dia por estadia
	forma de pago(efectivo, tarjeta o QR)

	informar el huesped que trajo mas personas en una sola reserva.

	la cantidad de personas que se quedaron mas dias

	la forma de pago mas utilizada

	el promedio de cantidad de dias por reserva
	*/

	var nombre;
	var cantidadDePersonas;
	var cantidadDeDias;
	var formaDePago;
	var respuesta;
	var contador;
	var maximoCantidadDePersonas;
	var maximoCantidadDePersonasNombre;
	var maximoCantidadDeDias;
	var maximoCantidadDeDiasNombre;
	var contadorQr;
	var contadorEfectivo;
	var contadorTarjeta;
	var promedio;
	var formaDePagoMasUtilizada;
	var acumulador;

	contadorTarjeta=0;
	contadorEfectivo=0;
	contadorQr=0;
	contador=0;
	respuesta="s";

	while(respuesta=="s")
	{
		do
		{nombre=prompt("Ingrese nombre del huesped: ");
		}while(!isNaN(nombre));

		do
		{
			cantidadDePersonas=prompt("Ingrese la cantidad de personas que se hospedaran: ");
			cantidadDePersonas=parseInt(cantidadDePersonas);

		}while(isNaN(cantidadDePersonas)||cantidadDePersonas>1&&cantidadDePersonas<10);

		do
		{
			cantidadDeDias=prompt("Ingrese la cantidad de dias que se hospedaran: ");
			cantidadDeDias=parseInt(cantidadDeDias);
			acumulador=acumulador+cantidadDeDias;

		}while(isNaN(cantidadDeDias)||cantidadDeDias>1&&cantidadDeDias<31);

		do
		{
			formaDePago=prompt("Ingrese como desea abonar: ");
		}while(!isNaN(formaDePago)||formaDePago!="tarjeta"||formaDePago!="efectivo"||formaDePago!="QR");

		if(contador==0||cantidadDePersonas>maximoCantidadDePersonas)
		{
			maximoCantidadDePersonas=cantidadDePersonas;
			maximoCantidadDePersonasNombre=nombre;
		}

		if(contador==0||cantidadDeDias>maximoCantidadDeDias)
		{
			maximoCantidadDeDias=cantidadDeDias;
			maximoCantidadDeDiasNombre=nombre;
		}

		switch(formaDePago)
		{
			case "qr":
				contadorQr++;
				break;
			case "tarjeta":
				contadorTarjeta++;
				break;
			case "efectivo":
				contadorEfectivo++;
				break;
		}
	
		respuesta=prompt("Ingrese 's' para seguir registrando huespedes.");

	}///fin del while

	if(contadorQr>contadorEfectivo&& contadorQr>contadorTarjeta)
	{
		formaDePagoMasUtilizada="QR";
	}else
	{
		if(contadorTarjeta>contadorEfectivo)
		{
			formaDePagoMasUtilizada="Tarjeta";
		}else
		{
			formaDePagoMasUtilizada="efectivo";
		}
	}

	promedio= acumulador/contador


}
