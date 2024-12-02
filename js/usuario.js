//parte de usuario con local storage

let acceso = JSON.parse(localStorage.getItem("lstUsuarios"));
let usuarioPosicion = localStorage.getItem("usuarioPosicion");
let usuario = acceso[usuarioPosicion];

document.getElementById("usuarioPerfil").innerHTML = usuario.usuario;
document.getElementById("correoPerfil").innerHTML = usuario.correo;
document.getElementById("telefonoPerfil").innerHTML = usuario.telefono;