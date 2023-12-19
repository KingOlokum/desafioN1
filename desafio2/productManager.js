const fs = require('fs')

const ruta = "./desafio2/data/productos.json";
const contenido = JSON.stringify([{
    id: "1",
    title: "Televisor",
    photo: "imagen1",
    price: "10",
    stock: "50"
},
{
    id: "2",
    title: "Computador",
    photo: "imagen2",
    price: "10",
    stock: "50"
},
{
    id: "3",
    title: "Lavadora",
    photo: "imagen3",
    price: "10",
    stock: "50"
}
],null,2);

fs.promises
.writeFile(ruta, contenido)
.then((resultado) => console.log(resultado))
.catch((error) => console.log(error));
