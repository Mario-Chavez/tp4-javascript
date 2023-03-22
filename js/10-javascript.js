/* 
 crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones,
  esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión,
   además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá 
   información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros.
 Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo
  si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el
   avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones a
 diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método
 abordar.


*/

class Aeropuerto {
    constructor(nombreAeropuerto) {
        this.nombreAeropuerto = nombreAeropuerto;
        this.listaAviones = [];
    }

    agregarAvion(avion) {
        this.listaAviones.push(avion);
    }

    buscarAvion(nombreAvion) {
        for (let i = 0; i < this.listaAviones.length; i++) {
            if (this.listaAviones[i].nombre === nombreAvion) {
                return this.listaAviones[i];
            }
        }
        console.log(`El avión ${nombreAvion} no se encuentra en el aeropuerto.`);
    }
}

class Avion {
    constructor(nombre, capacidad, destino) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.listaPasajeros = [];
    }

    abordar(pasajero) {
        if (this.listaPasajeros.length < this.capacidad) {
            this.listaPasajeros.push(pasajero);
            console.log(
                `¡${pasajero} abordó el avión ${this.nombre} con destino a ${this.destino}!`
            );
        } else {
            console.log(
                `El avión ${this.nombre} con destino a ${this.destino} está lleno.`
            );
        }
    }
}

// Crear un objeto de tipo Aeropuerto
const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");

const avion1 = new Avion("boing", 350, "Miami");
const avion2 = new Avion("Jet", 25, "Tierra de fuego");
const avion3 = new Avion("f16", 1, "desconocido");

avion1.abordar("lautaro");
avion3.abordar("benja");
