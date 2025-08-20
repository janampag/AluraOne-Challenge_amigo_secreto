// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = []
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    let lista = document.getElementById('listaAmigos')
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    let exclucionDeLetras = /^(?:$|(?=.*[A-Za-záéíóúÁÉÍÓÚñÑ])[A-Za-záéíóúÁÉÍÓÚñÑ0-9._ ]+)$/;
    if (!exclucionDeLetras.test(nombre)) {
        alert('Por favor digite un nombre valido(puede incluir numeros)')
    }else{
    if (nombres.includes(nombre)) {
        alert('Ya ha colocado el nombre, por favor ingrese otro diferente(puedes agregarle algún numero)')
    }else{
    nombre==="" ? alert("El campo está vacio, por favor ingrese un nombre.") : nombres.push(nombre);
    lista.innerHTML += `<li>${nombre}</li>`;
    }
}
    limpiarCaja()
}
function sortearAmigo(){
    let resultado = document.getElementById('resultado')
    if (nombres.length<2) {
        alert('Tiene que registrar al menos 2 nombres para sortear')
    }else{
        let numeroEscogido = Math.floor(Math.random()*nombres.length);
        resultado.innerHTML = `<li>\u{1F389} el amigo secreto es: ${nombres[numeroEscogido]} \u{1F389}</li>`; 
        let lis = document.querySelectorAll('#listaAmigos li')
        for (let li of lis) {
            if (li.textContent===nombres[numeroEscogido]) {
                li.style.color =  'red';
                li.style.fontWeight = 'bold'
                break;
            }
        }
    }
    
}
function limpiarCaja() {
    document.querySelector('#amigo').value="";
}
    document.getElementById('amigo')
    .addEventListener('keyup', enter => enter.key === "Enter" && agregarAmigo());