//parte de local storage
localStorage.setItem("correo", "usuarioPrueba@gmail.com");
localStorage.setItem("contraseña", "123456789");

let btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", function(){
    let correo = localStorage.getItem("correo");
    let contraseña = localStorage.getItem("contraseña");

    let entradaCorreo = document.getElementById("correoLogin").value;
    let entradaContraseña = document.getElementById("contraseñaLogin").value;

    if(entradaCorreo == correo && entradaContraseña == contraseña){
        window.location.href = "user.html";
    }
    else{
        alert("Correo o contraseña incorrectos");
    }z  
});
