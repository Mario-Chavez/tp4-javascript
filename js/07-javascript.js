/* 
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
-ISBN
-Título
-Autor
-Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada 
propiedad. Crear el método mostrarLibro() para mostrar la información
relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.


*/

class Libro {
    constructor(isbn, titulo, autor, numeroDePagina) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroDePagina = numeroDePagina;
    }

    // Métodos get y set para cada propiedad
    get isbn() {
        return this._isbn;
    }

    set isbn(valor) {
        this._isbn = valor;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(valor) {
        this._titulo = valor;
    }

    get autor() {
        return this._autor;
    }

    set autor(valor) {
        this._autor = valor;
    }

    get numeroDePagina() {
        return this._numeroDePagina;
    }

    set numeroDePagina(valor) {
        this._numeroDePagina = valor;
    }

    mostrarLibro() {
        document.write(
            `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.numeroDePagina} <br>`
        );
    }
}

const libro1 = new Libro("123456789", "La casa de papel", "Pedro Alonso", 350);
const libro2 = new Libro("987654321", "El código Da Vinci", "Dan Brown", 500);

libro1.mostrarLibro();
libro2.mostrarLibro();

if (libro1._numeroDePagina > libro2._numeroDePagina) {
    document.write(
        `El libro ${libro1._titulo}tiene mas Paginas y son : ${libro1._numeroDePagina} <br>`
    );
} else if (libro1._numeroDePagina < libro2._numeroDePagina) {
    document.write(
        `El libro ${libro2._titulo}tiene mas Paginas y son : ${libro2._numeroDePagina} <br>`
    );
} else {
    document.write(`Los libros tienen la misma cantidad de Paginas <br>`);
}
