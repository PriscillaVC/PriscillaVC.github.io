var button = document.querySelector("#anadir");
var palabrasTerror = ["MONSTRUO","MIEDO","OSCURIDAD","SOLEDAD","GRITOS","ARAÑA","MURCIELAGO","ESPIRITU","OUIJA","INVOCACION","CUENTOS","HALLOWEEN","CALABAZA","AHORCAR","BRUJAS","TERROR","PERSECUCION"];
var input = document.querySelector(".inputaniadir")
sessionStorage.setItem("Palabras", JSON.stringify(palabrasTerror))
button.addEventListener ("click", function(){
    if (input.value == ""){
        return;
    }
    else{
        palabrasTerror.push(input.value.toUpperCase());
        document.querySelector (".inputaniadir").value = "";
        sessionStorage.setItem("Palabras", JSON.stringify(palabrasTerror))
        partida()
    }

});