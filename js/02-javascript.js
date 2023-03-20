/* 
2-Escribe un programa que cree un objeto "cuenta" con las siguientes 
propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la
 cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada
como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer
 dinero y volver a mostrar la descripción del estado de la cuenta.

*/
class Cuenta {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }
    ingresar(num) {
        !num ? console.log("escriba un numero") : (this.saldo = this.saldo + num);
    }
    extraer(num) {
        !num ? console.log("escriba un numero") : (this.saldo = this.saldo - num);
    }
    informar() {
        document.write(`El titular de la cuenta es ${this.titular}<br>`);
        document.write(`Tu saldo es ${this.saldo}`);
    }
}

let miCuenta = new Cuenta("Mario");

// sumar saldo
miCuenta.ingresar(100);

// restar saldo
miCuenta.extraer(50);

// informar
miCuenta.informar();
