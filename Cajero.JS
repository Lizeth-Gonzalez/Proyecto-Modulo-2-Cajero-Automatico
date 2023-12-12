let Cliente = [
    { Usuario: "Olivia", Contrasena: "OLI" },
    { Usuario: "Rodrigo", Contrasena: "Contrasena" },
    { Usuario: "Carmen", Contrasena: "123" }
];

function Usuario1() {
    let input = document.getElementById("Usuario1");
    return input.value.trim(); // Eliminar espacios en blanco al inicio y al final
}

function Contrasena1() {
    let input = document.getElementById("Contrasena1");
    return input.value.trim();
}

function verificar() {
    let usuarioIngresado = Usuario1();
    let contrasenaIngresada = Contrasena1();

    if (usuarioIngresado === '' || contrasenaIngresada === '') {
        alert("Por favor, complete ambos campos.");
        return;
    }

    let credencialesCorrectas = Cliente.some(function(cliente) {
        return cliente.Usuario === usuarioIngresado && cliente.Contrasena === contrasenaIngresada;
    });

    if (credencialesCorrectas) {
    window.location.href= "Opciones.HTML";
    } else {
    alert("Usuario o contraseña incorrectos");
    }
}
