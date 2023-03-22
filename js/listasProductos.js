let productos = [
    "Hidratante facial",
    "Tonico exfoliante",
    "Protector solar factor 50",
    "Protector solar toque seco factor 50",
    "Protector solar con color factor 50",
    "Gel de limpieza facial",
    "Tonico hidratante",
    "Sérum hidratante",
    "Exfoliante de azúcar cherry",
    "Pads de hidrogel para contorno de ojos",
    "Mascarilla facial",
    "Sérum facial con PHA",
    "Agua micellar",
    "Mascara de hidratación y reparación",
    "Protector solar en barra",
    "Crema contorno de ojos",
    "Bálsamo labial",
];

/* mostrar unlista de productos*/

function mostrarProductos(titulo = "no tiene titulo disponible", arregloDeProduct) {
    document.write(`<h2>${titulo}  </h2>`);
    document.write(`<ul>`);

    arregloDeProduct.map((producto) => document.write(`<li>${producto}</li>`));

    document.write(`</ul>`);
}

mostrarProductos("listaoriginal de productos", productos);

/* filtrar productos por protectores solares */

let protectoresSolares = productos.filter((producto) => producto.includes("Protector"));

mostrarProductos("productos filtrados", protectoresSolares);

/* buscar producto */

let buscarProductos = productos.find((producto) => producto.includes("Sérum"));

console.log(buscarProductos);
// mostrarProductos("productos filtrados", buscarProductos);
