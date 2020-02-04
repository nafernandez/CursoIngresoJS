/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var var1;
	var1 = prompt("Ingrese un dato: ");
	document.getElementById("elNombre").value = var1;
}

