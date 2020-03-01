function mostrar()
{
	var nombre;
	var localidad;

	localidad=document.getElementById('laLocalidad').value;
	nombre=document.getElementById('elNombre').value;

	alert("Usted es "+nombre+" y vive en la localidad de "+ localidad);  
}
