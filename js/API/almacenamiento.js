//Almacenamiento
function altaUsario(){
    window.localStorage.setItem('usuario',$('#regNom').val());
}

function usuarioExiste(){
    if(window.localStorage.getItem('usuario')!=undefined)
        return true;
    else
        return false;
}