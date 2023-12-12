let Cliente = [
    { Usuario: "Olivia", Contrasena: "OLI" },
    { Usuario: "Rodrigo", Contrasena: "Contrasena" },
    { Usuario: "Carmen", Contrasena: "123" }
];

function Usuario1() {
    let input = document.getElementById("Usuario1");
        return input.value.trim();
}

function Contrasena1() {
    let input = document.getElementById("Contrasena1");
    return input.value.trim();
}

function verificarCredenciales() {
    let usuarioIngresado = Usuario1();
    let contrasenaIngresada = Contrasena1();

    if (usuarioIngresado === '' || contrasenaIngresada === '') {
        alert("Por favor, complete ambos campos.");
        return false;
    }

    let usuarioEncontrado = Cliente.find(function(cliente) {
        return cliente.Usuario === usuarioIngresado && cliente.Contrasena === contrasenaIngresada;
    });

    if (usuarioEncontrado) {
        alert("Usuario y contraseña correctos");

        switch (usuarioEncontrado.Usuario) {
            case 'Olivia':
                window.location.href = "./Opciones/OpcionesOlivia.HTML";
                break;
            case 'Rodrigo':
                window.location.href = "./Opciones/OpcionesRodrigo.HTML";
                break;
            case 'Carmen':
                window.location.href = "./Opciones/OpcionesCarmen.HTML";
                break;
            default:
                alert("Usuario no reconocido");
                break;
        }

        return false; // Evitar que el formulario se envíe normalmente
    } else {
        alert("Usuario o contraseña incorrectos");
        return false;
    }
}

inputUsuarioIngresado.value = "";
inputContrasenaIngresada.value = "";