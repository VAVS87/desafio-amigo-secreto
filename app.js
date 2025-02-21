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
    // estas dos lineas son para habilitar y deshabilitar 
    // los mensajes mostrados en la pagina en caso de que se quieran agregar mas amigos al listado
    //  a pesar de haber comenzado el sorteo
    lista.style.display = ""
    document.getElementById("resultado").style.display = "none";
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
    let indiceAleatorioAmigo = Math.floor(Math.random()*elementosLista);
    let amigoSorteo = listaAmigos[indiceAleatorioAmigo];
    //console.log(elementosLista)
    //console.log(indiceAleatorioAmigo)
    // este if verifica que por lo menos existan 2 nombres antes de generar un sorteo
    if ( elementosLista <3){
        alert("Ingrese por lo menos tres nombres para realizar sorteo");
        return
    }
    // se deja de mostrar en pantalla la lista de amigos
    document.getElementById("listaAmigos").style.display = "none";
    //se muestra el amigo sorteado
    document.getElementById("resultado").style.display = ""
    document.getElementById("resultado").innerHTML = `<li>El amigo sorteado es ${amigoSorteo}</li>`
}