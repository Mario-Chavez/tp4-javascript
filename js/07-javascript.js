/* 
7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un
 contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos.
Se podrá crear de dos formas, indicando nosotros el tamaño o con un 
tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la
 agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su 
teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si
 se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas 
funcionalidades.

*/

// Definimos la clase Contacto
class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

// Definimos la clase Agenda
class Agenda {
    constructor(tamanio = 10) {
        this.tamanio = tamanio;
        this.contactos = [];
    }

    aniadirContacto(contacto) {
        if (this.contactos.length >= this.tamanio) {
            console.log("La agenda está llena, no se puede añadir más contactos.");
        } else {
            this.contactos.push(contacto);
            console.log("Contacto añadido correctamente.");
        }
    }

    existeContacto(contacto) {
        return this.contactos.some((c) => c.nombre === contacto.nombre);
    }

    listarContactos() {
        console.log("Lista de contactos:");
        this.contactos.forEach((contacto) =>
            console.log(`${contacto.nombre}: ${contacto.telefono}`)
        );
    }

    buscarContacto(nombre) {
        const contactoEncontrado = this.contactos.find(
            (contacto) => contacto.nombre === nombre
        );
        if (contactoEncontrado) {
            console.log(
                `El teléfono del contacto ${contactoEncontrado.nombre} es ${contactoEncontrado.telefono}.`
            );
        } else {
            console.log(`No se encontró ningún contacto con el nombre ${nombre}.`);
        }
    }

    eliminarContacto(contacto) {
        const indice = this.contactos.findIndex((c) => c.nombre === contacto.nombre);
        if (indice >= 0) {
            this.contactos.splice(indice, 1);
            console.log(`El contacto ${contacto.nombre} ha sido eliminado.`);
        } else {
            console.log(
                `No se encontró ningún contacto con el nombre ${contacto.nombre}.`
            );
        }
    }

    agendaLlena() {
        return this.contactos.length >= this.tamanio;
    }

    huecosLibres() {
        return this.tamanio - this.contactos.length;
    }
}

// Creamos una agenda con algunos contactos predefinidos
const agenda = new Agenda();
const contacto1 = new Contacto("Juan", "123456789");
const contacto2 = new Contacto("María", "987654321");
const contacto3 = new Contacto("Pedro", "111111111");
agenda.aniadirContacto(contacto1);
agenda.aniadirContacto(contacto2);
agenda.aniadirContacto(contacto3);

// Definimos la función para mostrar el menú
function mostrarMenu() {
    console.log("");
    console.log("Menú de opciones:");
    console.log("1. Añadir contacto.");
    console.log("2. Buscar contacto.");
    console.log("3. Eliminar contacto.");
    console.log("4. Listar contactos.");
    console.log("5. Verificar si la agenda está llena.");
    console.log("6. Ver cantidad de huecos libres.");
    console.log("0. Salir.");
}

// Función principal que interactúa con el usuario
function main() {
    const agenda = new Agenda();
    let opcion = -1;
    while (opcion !== 0) {
        mostrarMenu();
        opcion = Number(prompt("Ingrese una opción:"));
        switch (opcion) {
            case 1:
                const nombre = prompt("Ingrese el nombre del contacto:");
                const telefono = prompt("Ingrese el teléfono");
                agenda.aniadirContacto(nombre, telefono);
                break;
            case 2:
                const nombreBuscado = prompt("Ingrese el nombre del contacto a buscar");
                agenda.buscarContacto(nombreBuscado);
                break;
            case 3:
                const eliminarContacto = prompt(
                    "Ingrese el nombre del contacto q quiere eliminar"
                );
                agenda.eliminarContacto(eliminarContacto);
                break;
            case 4:
                agenda.listarContactos();
                break;
            case 5:
                agenda.agendaLlena();
                break;
            case 6:
                agenda.huecosLibres();
                break;
            default:
                console.log("Opción inválida. Intente de nuevo.");
                break;
        }
    }
}
main();
