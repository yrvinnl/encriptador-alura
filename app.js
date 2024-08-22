window.onload = function() {
    document.getElementById('PalabraCodificada').style.display = 'none';
    document.getElementById('CopiarPalabra').style.display = 'none';
};

//Funcion codificar palabra
function codificarPalabra(){;
    let palabra=String(document.getElementById("PalabraUsuario").value) //Obtenemos la palabra del input del decodificador
    let i=0; //variable iterador
    palabra_arreglo= palabra.split(""); /*convertimos la palabra en un arreglo y le asignamos una variable*/
    
    /*cambiamos las vocales con las codificaciones asignada*/
    while (i < palabra_arreglo.length) {  
        switch (palabra_arreglo[i]) {
            case "a":
                palabra_arreglo[i]= "ai"; 
                break;
        
            case "e":
                palabra_arreglo[i]= "enter"; 
                break;
            
            case "i":
                palabra_arreglo[i]= "imes";
                break;
        
            case "o":
                palabra_arreglo[i]= "ober";
                break;
            
            case "u":
                palabra_arreglo[i]= "ufat";
                break;                              
        }
        i++;  
      }
    document.getElementById('PalabraUsuario').value=""
    ocultarImagenTexto();
    mostraResultado()
}

//Funcion para asignar dinamicamente los elementos en html. Recordar que se va a cambiar dinamicamente
function asignarTextoElemento(elemento , texto){
    let elementoHTML= document.querySelector(elemento); //Debemos seleccionar el ODM del index
    elementoHTML.innerHTML= texto; //le asignamos un texto
    return;
}

//Mostrar resultado de palabra normal a codificada
function mostraResultado(){
    let PalabraCodificada=palabra_arreglo.join("");
    document.querySelector(".palabra_codificada").innerText= PalabraCodificada;
}


//Funcion para ocultar la imagen y los mensajes
function ocultarImagenTexto(){
    document.getElementById("LogoMuneco").style.display= "none";
    document.getElementById("TituloRespuesta").style.display= "none";
    document.getElementById("TituloRespuestaAyuda").style.display= "none";
    document.getElementById('PalabraCodificada').style.display = 'inline';
    document.getElementById('CopiarPalabra').style.display = 'inline';
}


//Funcion para decodificar la palabra -2
function decodificarPalabra() {
    const input = document.getElementById('PalabraUsuario').value;
    let PalabraDecodificada = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');        
    ocultarImagenTexto();
    document.querySelector(".palabra_codificada").innerText= PalabraDecodificada;
        document.getElementById('PalabraUsuario').value=""
}

function copiarPalabraDecodificada(){
    let palabraCodificada=document.getElementById("PalabraCodificada")

    palabraCodificada.select();
    palabraCodificada.setSelectionRange(0,99999);
    navigator.clipboard.writeText(palabraCodificada.value)
    document.getElementById('PalabraUsuario').value=""
}




//-------------------------------------
/*function reemplazarLetras(texto) {
    return  texto.replace("ai", "a");
                .replace("enter", "e");
                .replace("imes", "i");
                ..replace("ober", "o");
                .replace("ufat", "u");

}



console.log(reemplazarLetras("aiimesufat")); // "patober"*/