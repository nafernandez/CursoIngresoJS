function mostrar()
{
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero=prompt("Ingresar un numero: ");
	segundoNumero=prompt("Ingresar otro numero: ");

		if(primerNumero==segundoNumero)
		{
			alert(primerNumero+segundoNumero);
		}else
		{	
			primerNumero=parseInt(primerNumero);
			segundoNumero=parseInt(segundoNumero);
			
			if(primerNumero>segundoNumero)
			{
				alert(primerNumero-segundoNumero);
			}else
			{
				suma=primerNumero+segundoNumero;
				alert(suma);
				
				if(suma>10)
				{
					alert("la suma es "+suma+ " y supero el 10.");
				}

			}
				
		}


}
