/* De los movimientos de un banco necesito saber:
-nombre del cliente.
-Edad(Debe ser mayor de edad).
-Sexo.
-Tipo de transaccion(Extraccion o deposito).
-Importe(No puede ser negativo).  {}
1. promedio de edad.
2.Nombre del mas joven.
3. sexo del importe mas alto
6. operacion mas utilizada
7. importe del mas viejo.
*/
function mostrar()
{
var nombre;
	var edad;
	var sexo;
	var tipoDeTransaccion;
	var importe;
	var respuesta;
	var acumuladorDeEdad;
	var contador;
	var promedio;
	var minimaEdadDelMasJoven;
	var minimaEdadDelMasJovenNombre;
	var importeMasAlto;
	var importeMasAltoSexo;
	var operacionMasUtilizada;
	var contadorDeposito;
	var contadorExtraccion;
	var edadDelMasGrande;
	var importeEdadDelMasGrande;

	contadorDeposito=0;
	contadorExtraccion=0;
	contador=0;
	acumuladorDeEdad=0;
	respuesta="si";
	contador=0;

	
		while(respuesta=="si")
		{	
			do
			{
				nombre=prompt("Ingrese el nombre del cliente: ");
			}while(!isNaN(nombre));

			do
			{
				edad=prompt("Ingrese la edad del cliente: ");
				edad=parseInt(edad);

			}while(isNaN(edad)||edad<18||edad>101);

			do
			{
				sexo=prompt("Ingrese el sexo del cliente: ");
			}while(!isNaN(sexo)||sexo!="f"&&sexo!="m");

			do
			{
				tipoDeTransaccion=prompt("Ingrese el tipo de transaccion: ");
			}while(!isNaN(tipoDeTransaccion)||tipoDeTransaccion!="extraccion"&&tipoDeTransaccion!="deposito");

			do
			{
				importe=prompt("Ingrese el importe que desee: ");
				importe=parseInt(importe);

			}while(isNaN(importe)||importe<0)

			/*valide datos*/
			if(contador==0||edad<minimaEdadDelMasJoven)
				{
					minimaEdadDelMasJoven=edad;
					minimaEdadDelMasJovenNombre=nombre;
				}

			if(contador==0||importe>importeMasAlto)
				{
					importeMasAlto=importe;
					importeMasAltoSexo=sexo;
				}

			switch(tipoDeTransaccion)
			{
				case "extraccion":
					contadorExtraccion++;
					break;
				case "deposito":
					contadorDeposito++;
					break;
			}

			if(contador==0||edad>edadDelMasGrande)			
			{
				edadDelMasGrande=edad;
				importeEdadDelMasGrande=importe;
			}



			contador++;
			acumuladorDeEdad=acumuladorDeEdad+edad;

			respuesta=prompt("Ingrese si para continuar: ");



		}//fin del while

			if(contadorDeposito>contadorExtraccion)
				{
					operacionMasUtilizada= "deposito";
				}else
				{
					operacionMasUtilizada="extraccion";
				}

		promedio=acumuladorDeEdad/contador;

		document.write(importeEdadDelMasGrande);
}
