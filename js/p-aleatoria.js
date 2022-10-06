var palabrasTerror = ["MONSTRUO","MIEDO","OSCURIDAD","SOLEDAD","GRITOS","ARAÑA","MURCIELAGO","ESPIRITU","OUIJA","INVOCACION","CUENTOS","HALLOWEEN","CALABAZA","AHORCAR","BRUJAS","TERROR","PERSECUCION"];
var Palabras = JSON.parse(sessionStorage.getItem("Palabras"));
if (null == Palabras){
    var palabraSecreta = document.querySelector(".palabra");
    var palabraAleatoria = palabrasTerror[Math.floor(Math.random()*palabrasTerror.length)];
    var palabraConGuiones = palabraAleatoria.replace(/./g, "_ ");
    palabraSecreta.innerText = palabraConGuiones;
}
else{
    var palabraSecreta = document.querySelector(".palabra");
    var palabraAleatoria = Palabras[Math.floor(Math.random()*Palabras.length)];
    var palabraConGuiones = palabraAleatoria.replace(/./g, "_ ");
    palabraSecreta.innerText = palabraConGuiones;
}