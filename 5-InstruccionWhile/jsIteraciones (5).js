function mostrar()
{
	var sexo;

	sexo=prompt("Ingrese 'f' para femenino, 'm' para masculino.");

	while(sexo!= "f"&&sexo!= "m")
	{
		sexo=prompt("Error, reingrese sexo, f' para femenino, 'm' para masculino.");
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN