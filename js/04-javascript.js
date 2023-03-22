/* 
4- Escribe una clase Producto para crear objetos. Estos objetos, deben 
presentar las propiedades código, nombre y precio, además del método 
imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los
 valores de los tres objetos instanciados.

*/
class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    imprimirDatos() {
        document.write(`el codigo es: ${this.codigo} <br>`);
        document.write(`el nombre es: ${this.nombre} <br>`);
        document.write(`el precio es: ${this.precio} <br>`);
    }
}

let product1 = new Producto(100, "PlayStation", 250000);
let product2 = new Producto(102, "Iphone13", 350000);
let product3 = new Producto(103, "Notebook", 200000);

const productos = [product1, product2, product3];

productos.map((productos) => productos.imprimirDatos());
