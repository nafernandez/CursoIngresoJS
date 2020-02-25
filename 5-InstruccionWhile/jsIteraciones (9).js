function mostrar()
{
	debugger;
	var minimo=0;
	var maximo=0;
	var numeroIngresado;
	var respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero porfavor.");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado<minimo||minimo==0)
		{
			minimo=numeroIngresado;
		}
		if (numeroIngresado>maximo||maximo==0) 
		{
			maximo=numeroIngresado;
		}
		respuesta=prompt("Ingrese si para volver a ingresar otro numero.");

	}
		document.getElementById('maximo').value=maximo;
		document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN