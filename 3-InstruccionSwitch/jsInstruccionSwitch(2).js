function mostrar()
{
	var mes;

	mes=document.getElementById('mes').value;

	switch(mes){
		case "Julio":
		case "Agosto":
		 	alert("Abrigate que hace frio.");
		 	break;
		 case "Septiembre":
		 case "Octubre":
		 case "Noviembre":
		 case "Diciembre":
		 	alert("Ya pasamos el frio, ahora calor!!!.");
		 	break;
		 default:
		 	alert("Falta para el invierno.");

	}











}//FIN DE LA FUNCIÓN