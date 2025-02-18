let listaAmigos =[];

//se crea la funcion para limpiar caja
function limpiarCaja(input) {
    input.value = '';
}

// crear una funcion que agregue el nombre al array
function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); 

    // Verificando que el valor no sea vacío
    if (nombre === "") {
        alert("Ingrese un nombre válido");
        limpiarCaja(input);
        return;
    } 
    // Verificar si el nombre ya está en la lista
    if (listaAmigos.includes(nombre)) {
        alert("El nombre ingresado ya se encuentra en la lista");
        limpiarCaja(input);
        return
    }
    //si pasa los filtros anteriores, se agrega a la lista
    listaAmigos.push(nombre);  
    console.log(listaAmigos);
    actualizarLista();
    limpiarCaja(input);

}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // asegurarse de que no haya duplicados al actualizar

    // Recorrer el array y agregar cada nombre como un <li>
    listaAmigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// funcion verifica existencia de elementos en la lista
function sortearAmigo() {
    let elementosLista = listaAmigos.length; 
    console.log(elementosLista)
    if ( elementosLista<=1){
        alert("Ingrese por lo menos dos nombres para realizar sorteo");
        return
    }
    else alert ("sortear")
}