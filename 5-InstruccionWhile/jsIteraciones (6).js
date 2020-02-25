function mostrar()
{
	var numeroIngresado;
	var suma=0;
	var promedio;
	var contador=0;

	while(contador<5)
	{	
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		suma=suma+numeroIngresado;
		contador=contador+1;
	}

	promedio= suma/contador;
	document.getElementById('suma').value=suma;
	document.getElementById('promedio').value=promedio;


	

}//FIN DE LA FUNCIÓN