function mostrar()
{ 
	var hora;
	hora=document.getElementById('hora').value;
	hora=parseInt(hora);

	switch(hora)
	{
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 20:
		case 21:
		case 22:
		case 24:
			alert("Es de noche.");
		break;
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
		break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("Es de tarde.");
		break;

	default:
		alert("No existe la hora.");

	}
	




}//FIN DE LA FUNCIÓN7 a 11 mañana, 12 y 19 tarde, 20 a 24 o 0 a 6 es de noche;