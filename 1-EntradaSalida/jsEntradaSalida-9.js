/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importeSueldo;
	var aumento;
	var resultadoAumento;


	importeSueldo=document.getElementById('sueldo').value;
	importeSueldo=parseInt(importeSueldo);

	aumento= importeSueldo*10/100;



	resultadoAumento=importeSueldo+aumento;

	document.getElementById('resultado').value=resultadoAumento;

	

	resultadoAumento=importeSueldo+aumento;

	console.log(resultadoAumento);

	

	


	


	
}
