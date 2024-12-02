//parte de login con local storage

var acceso = JSON.parse(localStorage.getItem("lstUsuarios"));
let btnEntrar = document.getElementById("btnEntrar");
//cargar lista de usuarios
btnEntrar.addEventListener("click", function(){

    let entradaCorreo = document.getElementById("correoLogin").value;
    let entradaContraseña = document.getElementById("contraseñaLogin").value;
    let i = 0;
    for(i = 0; i < acceso.length; i++){
        let correo = acceso[i].correo;
        let contraseña = acceso[i].contraseña;
        if(entradaCorreo ==  correo && entradaContraseña == contraseña){
            window.location.href = "user.html";
            localStorage.setItem("usuarioPosicion", i);
            break;
        }
    }
    if(i == acceso.length){
        alert("Usuario o contraseña incorrectos");
    }
});