window.onload = function() {
    document.getElementById('PalabraCodificada').style.display = 'none';
    document.getElementById('CopiarPalabra').style.display = 'none';
};


//detectamos los caracteres especiales
function mensajesCaracteresEspeciales(){
    let palabra_usuario=document.getElementById("PalabraUsuario").value;
    let caracteresEspeciales = /[\[\]°%&\/´¡!@#$%^&*(),.¿?":{}|<>]/g;
    if (caracteresEspeciales.test(palabra_usuario)) {
        return 1;
    } else {
        return 0;
    }
}
//Funcion final de codificar palabra
function codificarPalabra(){;
    let i=0; //variable iterador    
    let palabra= String(document.getElementById("PalabraUsuario").value) //valor que ingresa el usuario
    let caracteresEspeciales = /[\[\]°%&\/´¡!@#$%^&*(),.¿?":{}|<>]/g; //lista de caracteres especiales
    let decision=caracteresEspeciales.test(palabra)
    //creamos la sintaxis de decisión para los caracteres especiales:
  switch (decision){
    case true:
        alert("No esta permitido los caracteres especiales")
        document.getElementById("PalabraUsuario").value=""
        document.getElementById("PalabraCodificada").value=""
        document.getElementById('PalabraCodificada').style.display = 'none';
        document.getElementById('CopiarPalabra').style.display = 'none';
        document.getElementById("LogoMuneco").style.display= "inline";
        document.getElementById("TituloRespuesta").style.display= "inline";
        document.getElementById("TituloRespuestaAyuda").style.display= "inline";
        break
    
    case false:
        //Generamos palabaras limpias de tilde
        let palabraSinTilde=palabra
        .replace(/á/g, 'a')
        .replace(/é/g, 'e')
        .replace(/í/g, 'i')
        .replace(/ó/g, 'o')
        .replace(/ú/g, 'u')
        .replace(/Á/g, 'A')
        .replace(/É/g, 'E')
        .replace(/Í/g, 'I')
        .replace(/Ó/g, 'O')
        .replace(/Ú/g, 'U');
        
        //Generamos palabras que esten limpias de mayúsculas
        let palabraMinuscula=palabraSinTilde.toLowerCase();
        let palabra_arreglo= palabraMinuscula.split(""); /*convertimos la palabra en un arreglo y le asignamos una variable*/             
        
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
            let palabraCodificada = palabra_arreglo.join("");
            document.getElementById('PalabraUsuario').value=""
            document.getElementById("PalabraCodificada").value = palabraCodificada;
            ocultarImagenTexto();
  }

}
function decodificarPalabra() {
    let input = document.getElementById('PalabraUsuario').value;
    let PalabraDecodificada = input //reemplazamos con los valores de la decodificacion
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u')        
    ocultarImagenTexto();
    document.getElementById("PalabraCodificada").value= PalabraDecodificada;
    document.getElementById('PalabraUsuario').value="";
}

//Mostrar resultado de palabra normal a codificada
function mostraResultado() {
    let PalabraCodificada = palabra_arreglo.join("");
    document.querySelector(".palabra_codificada").innerText = PalabraCodificada;
}


//Funcion para ocultar la imagen y los mensajes
function ocultarImagenTexto(){
    document.getElementById("LogoMuneco").style.display= "none";
    document.getElementById("TituloRespuesta").style.display= "none";
    document.getElementById("TituloRespuestaAyuda").style.display= "none";
    document.getElementById('PalabraCodificada').style.display = 'inline';
    document.getElementById('CopiarPalabra').style.display = 'inline';
}

//Funcion para ponerlo todo como el inicio
function mostrarElementosIniciales(){
document.getElementById("LogoMuneco").style.display= "inline";
document.getElementById("TituloRespuesta").style.display= "inline";
document.getElementById("TituloRespuestaAyuda").style.display= "inline";
document.getElementById('PalabraCodificada').style.display = 'none';
document.getElementById('CopiarPalabra').style.display = 'none';
}


//funcion codificar palabra preliminar
function primerCodificarPalabra(iniciador){        
//let caracteresEspeciales=mensajesCaracteresEspeciales()
    
    let i=0; //variable iterador´
    palabra= document.getElementById("PalabraUsuario").value
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

document.getElementById("PalabraCodificada").value=""