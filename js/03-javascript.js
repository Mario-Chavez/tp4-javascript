/* 
3-Escribe una clase que permita crear distintos objetos “rectángulos”,
 con las propiedades de alto y ancho, mas los métodos necesarios para
  modificar y mostrar sus propiedades, calcular el perímetro y el 
  área

*/
class Objetos {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    modificarPropiedades(alt2, ancho2) {
        !alt2 || !ancho2
            ? alert("escriba el alto y ancho")
            : (this.saldo = this.alto + alt2),
            (this.ancho = this.ancho + ancho2);
    }
    perimetro() {
        let perimetro = this.alto + this.ancho + this.alto + this.ancho;
        document.write(`el perimetro del objeto es ${perimetro} <br>`);
    }
    area() {
        let area = this.alto * this.ancho;
        document.write(`El Area del objeto es ${area} <br>`);
    }
}

let miObjeto = new Objetos(10, 20);

// perimetro
miObjeto.perimetro();

// area
miObjeto.area(50);

//modificar propiedades
miObjeto.modificarPropiedades(50, 30);

// perimetro nuevo
miObjeto.perimetro();

// area nueva
miObjeto.area(50);
