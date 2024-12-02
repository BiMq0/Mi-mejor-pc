//parte de productos con local storage

let acceso = JSON.parse(localStorage.getItem("lstUsuarios"));
let usuarioPosicion = localStorage.getItem("usuarioPosicion");
let usuario = acceso[usuarioPosicion];



//parte de stock de productos
let l1Stock = 32;
let l2Stock = 23;
let l3Stock = 76;

let m1Stock = 54;
let m2Stock = 43;
let m3Stock = 12;

let r1Stock = 74;
let r2Stock = 81;
let r3Stock = 10;

let g1Stock = 12;
let g2Stock = 23;
let g3Stock = 54;

let p1Stock = 12;
let p2Stock = 23;
let p3Stock = 54;

document.getElementById("l1Stock").innerHTML = l1Stock;
document.getElementById("l2Stock").innerHTML = l2Stock;
document.getElementById("l3Stock").innerHTML = l3Stock;

document.getElementById("m1Stock").innerHTML = m1Stock;
document.getElementById("m2Stock").innerHTML = m2Stock;
document.getElementById("m3Stock").innerHTML = m3Stock;

document.getElementById("r1Stock").innerHTML = r1Stock;
document.getElementById("r2Stock").innerHTML = r2Stock;
document.getElementById("r3Stock").innerHTML = r3Stock;

document.getElementById("g1Stock").innerHTML = g1Stock;
document.getElementById("g2Stock").innerHTML = g2Stock;
document.getElementById("g3Stock").innerHTML = g3Stock;

document.getElementById("p1Stock").innerHTML = p1Stock;
document.getElementById("p2Stock").innerHTML = p2Stock;   
document.getElementById("p3Stock").innerHTML = p3Stock;

let btnAñadirL1 = document.getElementById("añadirl1");
let btnAñadirL2 = document.getElementById("añadirl2");
let btnAñadirL3 = document.getElementById("añadirl3");

let btnAñadirM1 = document.getElementById("añadirm1");
let btnAñadirM2 = document.getElementById("añadirm2");
let btnAñadirM3 = document.getElementById("añadirm3");

let btnAñadirR1 = document.getElementById("añadirr1");
let btnAñadirR2 = document.getElementById("añadirr2");
let btnAñadirR3 = document.getElementById("añadirr3");

let btnAñadirG1 = document.getElementById("añadirg1");
let btnAñadirG2 = document.getElementById("añadirg2");
let btnAñadirG3 = document.getElementById("añadirg3");

let btnAñadirP1 = document.getElementById("añadirp1");
let btnAñadirP2 = document.getElementById("añadirp2");
let btnAñadirP3 = document.getElementById("añadirp3");


btnAñadirL1.addEventListener("click", function(){
    let l1 = document.getElementById("l1");
    productosCarrito.push(l1);
    l1Stock--;
    document.getElementById("l1Stock").innerHTML = l1Stock;
});

btnAñadirL2.addEventListener("click", function(){
    let l2 = document.getElementById("l2");
    productosCarrito.push(l2);
    l2Stock--;
    document.getElementById("l2Stock").innerHTML = l2Stock;
});

btnAñadirL3.addEventListener("click", function(){
    let l3 = document.getElementById("l3");
    productosCarrito.push(l3);
    l3Stock--;
    document.getElementById("l3Stock").innerHTML = l3Stock;
});

btnAñadirM1.addEventListener("click", function(){
    let m1 = document.getElementById("m1");
    productosCarrito.push(m1);
    m1Stock--;
    document.getElementById("m1Stock").innerHTML = m1Stock;
});

btnAñadirM2.addEventListener("click", function(){
    let m2 = document.getElementById("m2");
    productosCarrito.push(m2);
    m2Stock--;
    document.getElementById("m2Stock").innerHTML = m2Stock;
});

btnAñadirM3.addEventListener("click", function(){
    let m3 = document.getElementById("m3");
    productosCarrito.push(m3);
    m3Stock--;
    document.getElementById("m3Stock").innerHTML = m3Stock;
});

btnAñadirR1.addEventListener("click", function(){
    let r1 = document.getElementById("r1");
    productosCarrito.push(r1);
    r1Stock--;
    document.getElementById("r1Stock").innerHTML = r1Stock;
});

btnAñadirR2.addEventListener("click", function(){
    let r2 = document.getElementById("r2");
    productosCarrito.push(r2);
    r2Stock--;
    document.getElementById("r2Stock").innerHTML = r2Stock;
});

btnAñadirR3.addEventListener("click", function(){
    let r3 = document.getElementById("r3");
    productosCarrito.push(r3);
    r3Stock--;
    document.getElementById("r3Stock").innerHTML = r3Stock;
});

btnAñadirG1.addEventListener("click", function(){
    let g1 = document.getElementById("g1");
    productosCarrito.push(g1);
    g1Stock--;
    document.getElementById("g1Stock").innerHTML = g1Stock;
});

btnAñadirG2.addEventListener("click", function(){
    let g2 = document.getElementById("g2");
    productosCarrito.push(g2);
    g2Stock--;
    document.getElementById("g2Stock").innerHTML = g2Stock;
});

btnAñadirG3.addEventListener("click", function(){
    let g3 = document.getElementById("g3");
    productosCarrito.push(g3);
    g3Stock--;
    document.getElementById("g3Stock").innerHTML = g3Stock;
    
});

btnAñadirP1.addEventListener("click", function(){
    let p1 = document.getElementById("p1");
    productosCarrito.push(p1);
    p1Stock--;
    document.getElementById("p1Stock").innerHTML = p1Stock;
});

btnAñadirP2.addEventListener("click", function(){
    let p2 = document.getElementById("p2");
    productosCarrito.push(p2);
    p2Stock--;
    document.getElementById("p2Stock").innerHTML = p2Stock;
});

btnAñadirP3.addEventListener("click", function(){
    let p3 = document.getElementById("p3");
    productosCarrito.push(p3);
    p3Stock--;
    document.getElementById("p3Stock").innerHTML = p3Stock;
    localStorage.setItem("pr3", p3);
});


let filtro = document.getElementById("filtroSeleccion").value;
if(filtro.text == "Todos"){
    let prod = document.getElementById("laptops"); 
    prod.style.display = "none";
}else if(filtro.text == "Tipo"){
    let prod = document.getElementById("memorias"); 
    prod.style.display = "none";
}else if(filtro.text == "Marca"){
    let prod = document.getElementById("procesadores"); 
    prod.style.display = "none";
}
console.log(filtro);