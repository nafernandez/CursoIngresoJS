function mostrar()
{
	var numeroNegativo=1;
	var numeroPositivo=0;
	var numeroIngresado;
	var respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado<0)
		{
			numeroNegativo=numeroNegativo*numeroIngresado;
		
		}else
		{
			numeroPositivo=numeroPositivo+numeroIngresado;
		}
		respuesta=prompt("Ingrese si solo si quiere seguir ingresando numeros.");

	}

	document.getElementById('suma').value=numeroPositivo;
	document.getElementById('producto').value=numeroNegativo;



	

}//FIN DE LA FUNCIÓN