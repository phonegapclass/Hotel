//Servidor
function enviarDatos(nom,mail,tel){
    //alert(1);
	/*$.ajax({
		type: "POST",
		url: "http://www.igitsoft.com/pgtest.php",
		data: "nom="+nom+"&mai="+mail+"&tel="+tel
	}).done(function(msg){
        alert(msg);
		if(msg==1){
			subirFoto(foto);
		}else{
			navigator.notification.alert("No se han enviado los datos correctamente",null,"Error en Servidor","De acuerdo");
		}
	});*/
    datos = "nom="+nom+"&tel="+tel;
	$.ajax({
		type: "POST",
		url: "http://www.igitsoft.com/pgtest.php",
		data: datos
	}).done(function( msg ) {
		alert(msg);
	});
}