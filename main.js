function saveData(){
	var name = document.getElementById("nombre").value;
	var password = document.getElementById("password").value;
	sessionStorage.setItem(name, password);
}

function recoverData(){
	for( var i = 0; i < sessionStorage.length; i++){
		var name = sessionStorage.key(i);
		var password = sessionStorage.getItem(name);
		document.getElementById("data").innerHTML  = '<div>' + 'Nombre: ' + name + '<br> Clave: ' + password + '</div>'
	}
}
function cleanData(){
	document.getElementById("data").innerHTML = "Limpiada vista. Los Datos permanecen"
}
function clanAll(){
	sessionStorage.clear();
	recoverData();
}