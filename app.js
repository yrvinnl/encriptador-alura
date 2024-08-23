window.onload = function() {
    document.getElementById('PalabraCodificada').style.display = 'none';
    document.getElementById('CopiarPalabra').style.display = 'none';
};


//detectamos los caracteres especiales
function mensajesCaracteresEspeciales(){
    let palabra_usuario=document.getElementById("PalabraUsuario").value;
    let caracteresEspeciales = /[\[\]°%&\/´¡!@#$%^&*(),.¿?":{}|<>]/g;
    if (caracteresEspeciales.test(palabra_usuario)) {
        return "1";
    } else {
        return "0";
    }
}
//Funcion final de codificar palabra
function codificarPalabra(){;
    let i=0; //variable iterador´
    let palabra= document.getElementById("PalabraUsuario").value
    let palabra_arreglo= palabra.split(""); /*convertimos la palabra en un arreglo y le asignamos una variable*/           
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

//Funcion para ponerlo todo como el inicio
function mostrarElementosIniciales(){
document.getElementById("LogoMuneco").style.display= "inline";
document.getElementById("TituloRespuesta").style.display= "inline";
document.getElementById("TituloRespuestaAyuda").style.display= "inline";
document.getElementById('PalabraCodificada').style.display = 'none';
document.getElementById('CopiarPalabra').style.display = 'none';
}


//Funcion para decodificar la palabra
function decodificarPalabra() {
    const input = document.getElementById('PalabraUsuario').value;
    let PalabraDecodificada = input //reemplazamos con los valores de la decodificacion
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u')        
    ocultarImagenTexto();
    document.querySelector(".palabra_codificada").innerText= PalabraDecodificada;
        document.getElementById('PalabraUsuario').value="";
}

function copiarPalabraDecodificada(){
    let palabraCodificada=document.getElementById("PalabraCodificada");

    palabraCodificada.select();
    palabraCodificada.setSelectionRange(0,99999);
    navigator.clipboard.writeText(palabraCodificada.value);
    document.getElementById('PalabraUsuario').value="";
}

//Funcion que entrega palabra lista para codificar
function listoParaEncriptar(){
    let palabra=document.getElementById("PalabraUsuario").value;
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
    let palabraMinuscula=palabraSinTilde.toLowerCase()
    let i=0; //variable iterador´
    palabra_arreglo= palabraMinuscula.split(""); /*convertimos la palabra en un arreglo y le asignamos una variable*/           
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
        
        palabraCodificada=
        
        document.getElementById('PalabraUsuario').value=""
        let PalabraCodificada=palabra_arreglo.join("");
        ocultarImagenTexto();
        //mostraResultado()
        
}

//funcion que cambias mayúsculas
function cambiarMayusculas(){
    let palabra=document.getElementById("PalabraUsuario").value;

    let palabraMinuscula=palabra.toLowerCase();

    document.getElementById("PalabraUsuario").value=palabraMinuscula;

}

//Funcion que reemplaza las tildes
function reemplazarTildes(){
    let palabra=document.getElementById("PalabraUsuario").value;
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

    document.getElementById("PalabraUsuario").value=palabraSinTilde;
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