let listaAmigos =[];

//se crea la funcion para limpiar caja
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

// crear una funcion que agregue el nombre al array

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); 
    //verificando que el valor no sea vacio,dando una alerta si es asi
    if (nombre !== ""){
        listaAmigos.push(nombre)  
        console.log(listaAmigos)
        limpiarCaja();

    }else
    alert ("Ingrese un nombre valido")
    return;

    
}