/* 
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y
 altura, año de nacimiento. Si quieres añadir alguna propiedad extra
puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué 
generación pertenece la persona creada y cual es el rasgo característico
 de esta generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje
indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.


*/

class Persona {
    constructor(nombre, edad, sexo, peso, altura, nacimientoAnio, dni) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimientoAnio = nacimientoAnio;
        this.dni = dni || this.generaDNI();
    }

    mostrarGeneracion() {
        let generacion = "";
        if (this.nacimientoAnio >= 1928 && this.nacimientoAnio <= 1945) {
            generacion = "Silent Generation";
            document.write(
                `La persona pertenece a la generación ${generacion}, cuyo rasgo característico es la disciplina.<br>`
            );
        } else if (this.nacimientoAnio >= 1946 && this.nacimientoAnio <= 1964) {
            generacion = "Baby Boomer";
            document.write(
                `La persona pertenece a la generación ${generacion}, cuyo rasgo característico es la ambición.<br>`
            );
        } else if (this.nacimientoAnio >= 1965 && this.nacimientoAnio <= 1980) {
            generacion = "Generación X";
            document.write(
                `La persona pertenece a la generación ${generacion}, cuyo rasgo característico es la independencia.<br>`
            );
        } else if (this.nacimientoAnio >= 1981 && this.nacimientoAnio <= 1993) {
            generacion = "Millennial";
            document.write(
                `La persona pertenece a la generación ${generacion}, cuyo rasgo característico es la adaptabilidad.<br>`
            );
        } else if (this.nacimientoAnio >= 1994 && this.nacimientoAnio <= 2010) {
            generacion = "Generación Z";
            document.write(
                `La persona pertenece a la generación ${generacion}, cuyo rasgo característico es la tecnología.<br>`
            );
        } else if (this.nacimientoAnio > 2010) {
            document.write(
                "La persona es demasiado joven para pertenecer a una generación."
            );
        } else {
            document.write("No se pudo determinar la generación de la persona.");
        }
    }

    esMayorDeEdad() {
        if (this.edad >= 18) {
            document.write("La persona es mayor de edad. <br>");
        } else {
            document.write("La persona es menor de edad. <br>");
        }
    }

    mostrarDatos() {
        document.write(`Nombre: ${this.nombre}<br>`);
        document.write(`Edad: ${this.edad} <br>`);
        document.write(`DNI: ${this.dni} <br>`);
        document.write(`Sexo: ${this.sexo} <br>`);
        document.write(`Peso: ${this.peso} <br>`);
        document.write(`Altura: ${this.altura} <br>`);
        document.write(`Año de nacimiento: ${this.nacimientoAnio} <br>`);
    }

    /* si no recibe un DNI lo genera */
    generaDNI() {
        return Math.floor(Math.random() * 100000000);
    }
}

const persona1 = new Persona("Juan", 25, "H", 70, 1.75, 1996);
persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
persona1.mostrarDatos();
