//menu hamburguersa
let btnMenu = document.getElementById("menuBtnContenedor");
let menu = document.querySelector(".menu");
let swMenu = false;

btnMenu.addEventListener("click", function(){
    btnMenu.style.zIndex = "100";
    if(swMenu){
        menu.style.display = "none";
        swMenu = false;
    }else{
        menu.style.display = "flex";
        swMenu = true;
    }
});


//parte de usuario con local storage

let acceso = JSON.parse(localStorage.getItem("lstUsuarios"));
let usuarioPosicion = localStorage.getItem("usuarioPosicion");
let usuario = acceso[usuarioPosicion];

document.getElementById("usuarioPerfil").innerHTML = usuario.usuario;
document.getElementById("correoPerfil").innerHTML = usuario.correo;
document.getElementById("telefonoPerfil").innerHTML = usuario.telefono;