/* 
 1- Crea un objeto llamado auto que tenga algunas características como el
  color, marca, modelo y si está encendido o apagado. Crea los métodos
   necesarios para permitir encender y apagar el auto.
*/

class Auto {
    constructor(color, marca, modelo) {
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
    }
    encender() {
        return document.write(`El Auto esta prendido`);
    }
    apagar() {
        return document.write(`El Auto esta prendido`);
    }
}

let automovil = new Auto("rojo", "Chevrolet", "2022");
document.write(`Color = ${automovil.color}<br>`);
document.write(`Marca = ${automovil.marca}<br>`);
document.write(`Modelo = ${automovil.modelo} <br>`);
automovil.encender();
