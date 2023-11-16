
// alert("Hola este es mi Javascript");
let minombre="Aníbal";
console.log(minombre);
// let listas=document.getElementsByTagName("li");
// console.log(listas);
let contenidoTitulo="Aníbal Max";
let titulo=document.querySelector(".titulo")
titulo.innerHTML = contenidoTitulo;

let textoTitulo=titulo.innerText;
if (textoTitulo=="minombre"){
    titulo.innerHTML = "otro";
}
else{
    console.log("No se cumple")
}

let nombre1="Aníbal Max";
let ciudad="Bogotá Colómbia";
let perfil="profesional";

let parrafo = document.querySelector(".parrafo-2");

function cambiarTexto(nombre1, ciudad, perfil){
let contenido=`Me llamo ${nombre1}, nací en ${ciudad}. Soy ingeniero de sistemas y tecnologo en telecomunicaciones, me gusta la tecnología el deporte y salir a pasear con mi familia. Me encantaría aprender a programar para poder mejorar mi perfil ${perfil} explotando mi creatividad y capacidades en pro de los demas.`;
return contenido
};
parrafo.innerText = cambiarTexto(nombre1, ciudad, perfil);

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

console.log("navBar por menu???")

// Formulario-----------------------------------------------------------------------

// const form = document.getElementById("form");
// const nombre = document.getElementById("nombre");
// const parrafo = document.getElementById("alertas");

// function validarFormulario() {
//   let warnings = "";
//   let valido = true;
//   parrafo.innerHTML = "";

//   if (nombre.value.length < 4) {
//     warnings += `El nombre debe contener más de 4 carcateres`;
//     valido = false;
//   }

//   if (!valido) {
//     parrafo.innerHTML = warnings;
//   } else {
//     parrafo.innerHTML = "Enviado";
//   }
//   return valido;
// }

// form.addEventListener("submit", (e) => {
//   if (validarFormulario()) {
//     // Si la validación es exitosa, puedes enviar el formulario
//     formulario.submit();
//   } else {
//     e.preventDefault(); // Evita que el formulario se envíe automáticamente
//   }

// });

