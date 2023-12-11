class Product {
    constructor(title, photo, price, stock) {
      this.id = Product.incrementId();
      this.title = title;
      this.photo = photo;
      this.price = price;
      this.stock = stock;
    }
  
    static incrementId() {
      if (!this.latestId) this.latestId = 1;
      else this.latestId++;
      return this.latestId;
    }
  }
  
  class ProductManager {
    constructor() {
      this.products = [];
    }
  
    create(data) {
      const { title, photo, price, stock } = data;
      const newProduct = new Product(title, photo, price, stock);
      this.products.push(newProduct);
    }
  
    read() {
      return this.products;
    }
  
    readOne(id) {
      return this.products.find(product => product.id === id);
    }
  }
  
  class User {
    constructor(name, photo, email) {
      this.id = User.incrementId();
      this.name = name;
      this.photo = photo;
      this.email = email;
    }
  
    static incrementId() {
      if (!this.latestId) this.latestId = 1;
      else this.latestId++;
      return this.latestId;
    }
  }
  
  class UserManager {
    constructor() {
      this.users = [];
    }
  
    create(data) {
      const { name, photo, email } = data;
      const newUser = new User(name, photo, email);
      this.users.push(newUser);
    }
  
    read() {
      return this.users;
    }
  
    readOne(id) {
      return this.users.find(user => user.id === id);
    }
  }
  
  // Ejemplo de uso:
  
  const productManager = new ProductManager();
  productManager.create({
    title: "Producto 1",
    photo: "/ruta/imagen1",
    price: 10,
    stock: 50
  });
  productManager.create({
    title: "Producto 2",
    photo: "/ruta/imagen2",
    price: 20,
    stock: 30
  });
  
  console.log("Todos los productos:", productManager.read());
  console.log("Producto con ID 1:", productManager.readOne(1));
  
  const userManager = new UserManager();
  userManager.create({
    name: "Usuario 1",
    photo: "/ruta/foto1",
    email: "user1@user.com"
  });
  userManager.create({
    name: "Usuario 2",
    photo: "/ruta/foto",
    email: "user2@user.com"
  });
  
  console.log("Todos los usuarios:", userManager.read());
  console.log("Usuario con ID 1:", userManager.readOne(1));
  