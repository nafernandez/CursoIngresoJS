function mostrar()
{
	var numeroIngresado;

	numeroIngresado=prompt("Por favor, ingrese un numero.");

	while((numeroIngresado<0)||(numeroIngresado>10))
	{
		numeroIngresado=prompt("Error, re ingrese el numero");
		console.log(numeroIngresado);
	}
	

	document.getElementById('Numero').value=numeroIngresado;

}//FIN DE LA FUNCIÓN