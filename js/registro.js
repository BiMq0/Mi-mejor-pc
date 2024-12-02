//parte de registro con local storage
var usuarios = [];
let obtenerRegistro = document.getElementById("btnRegistrar");
let admin = {
    usuario: "admin",
    correo: "admin@admin.com",
    contraseña: "admin",
    telefono: "76741337"
}
usuarios[0] = admin;
localStorage.setItem("lstUsuarios", JSON.stringify(usuarios));

obtenerRegistro.addEventListener("click", function(){
    let usuario = document.getElementById("usuarioRegistro").value;
    let correo = document.getElementById("correoRegistro").value;
    let contraseña = document.getElementById("contraseñaRegistro").value;
    let telefono = document.getElementById("telefonoRegistro").value;

    let registroUsuario = {
        usuario: usuario, 
        correo: correo, 
        contraseña: contraseña, 
        telefono: telefono
    };
    usuarios.push(registroUsuario);
    localStorage.setItem("lstUsuarios", JSON.stringify(usuarios));
    alert("Registro exitoso");
    window.location.href = "login.html";
});

