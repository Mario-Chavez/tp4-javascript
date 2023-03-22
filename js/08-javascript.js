/* 
8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y
 los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona
 " con diferentes valores para sus propiedades y llama a sus métodos
  "saludar" y "despedirse".

*/

class Persona {
    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

    saludar() {
        document.write(
            `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años. Soy ${this.profesion}.<br>`
        );
    }

    despedirse() {
        document.write(`Adiós, ${this.nombre} se despide.<br>`);
    }
}

const persona1 = new Persona("Juan", 25, "ingeniero");
const persona2 = new Persona("María", 30, "abogada");

persona1.saludar();
persona2.saludar();
persona1.despedirse();
persona2.despedirse();
