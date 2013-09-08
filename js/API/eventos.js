//Eventos
$(document).ready(function(){
	document.addEventListener("deviceready",function(){
		window.location.href="#registro";
		$('#regEnv').tap(function(){
			var nom = $('#regNom').val();
			var mail = $('#regEmail').val();
			var tel = $('#regTel').val();
			var foto = $('#regFoto').attr('foto');
			
			if(nom != '' && mail != '' && tel != '' && foto != '' && foto != undefined){
				
			}else{
				navigator.notification.alert("Todos los Campos son requeridos", null, 'Registro','Aceptar');
			}
		});
		$('#regFoto').tap(function(){
			tomarFoto();
		});
	}, false);
});