const opciones = ["piedra", "papel", "tijeras"];

const eleccionUsuario = prompt("Elige entre piedra, papel o tijeras:");

const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

if (typeof eleccionUsuario === "string") {
    if (eleccionUsuario === eleccionComputadora) {
        document.write("Empate!");
    } else if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijeras") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijeras" && eleccionComputadora === "papel")
    ) {
        document.write("Ganaste!");
    } else {
        document.write("Perdiste!");
    }
} else {
    alert("Debes escribir: piedra papel o tijeras");
}
