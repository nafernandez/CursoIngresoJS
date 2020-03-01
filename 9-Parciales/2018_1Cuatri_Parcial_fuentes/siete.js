function mostrar()
{
	var notaIngresada;
	var sexo;
	var contador=0;
	var acumulador=0;
	var promedio;
	var peorNota=10;
	var contadorVaronesAprobados=0;

	while(contador<5)
	{
		notaIngresada=prompt("Ingrese una nota:");
		notaIngresada=parseInt(notaIngresada);

		sexo=prompt("Ingrese el sexo del alumno:");
		contador=contador+1;
		acumulador=notaIngresada+acumulador;

		if(notaIngresada<peorNota)
		{
			peorNota=notaIngresada;

		}
		
		if(sexo=="m"&&notaIngresada>5)
		{
			contadorVaronesAprobados=contadorVaronesAprobados+1;

		}
	}
	promedio=acumulador/5;
	alert("La peor nota es " +peorNota);
	alert("La cantidad de varones que su nota fue menor a 6 son: "+contador);
}
