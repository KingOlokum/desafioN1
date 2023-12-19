const fs = require('fs')

const ruta = "./desafio2/data/usuarios.json";
const contenido = JSON.stringify([{
    id: "1",
    name: "Andres Sanchez",
    photo: "photo1",
    email: "andres@user.com",    
},
{
    id: "2",
    name: "Maria Emma",
    photo: "photo2",
    email: "maria@user.com",    
},
{
    id: "3",
    name: "Nadja Riascos",
    photo: "photo3",
    email: "nadja@user.com",    
}
],null,2);

fs.promises
.writeFile(ruta, contenido)
.then((resultado) => console.log(resultado))
.catch((error) => console.log(error));