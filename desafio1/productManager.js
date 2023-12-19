class ProductManager {
    static #products = [];
    constructor() {}
    create(data) {
      try {
        if (!data.title || !data.photo || !data.price || !data.stock) {
          throw new Error("Title, Photo, Price, Stock are require");
        } else {
          const one = {
            id:
              ProductManager.#products.length === 0
                ? 1
                : ProductManager.#products[ProductManager.#products.length - 1]
                    .id + 1,
            title: data.title,
            price: data.price,
            stock: data.stock,
          };
          ProductManager.#products.push(one);
        }
      } catch (error) {
        return error.message;
      }
    }
    read(){
      try {
        const allProducts = ProductManager.#products;
        if (allProducts.length === 0){
          throw new Error("There aren't products");
        } else {
          return allProducts;
        }
      } catch (error){
        return error.message;
      }
    }
    readOne(id) {
      try {
        const oneProduct = ProductManager.#products.find((each) => each.id === Number(id));
        if (oneProduct) {
          return oneProduct;
        } else {
          throw new Error("There isnt user with ID" + id);
        }
      } catch (error) {
        return error.message;
      }
    }
  }
  const products = new ProductManager();
  console.log(products.read());
  const productOne = products.create({title:"Computadora", photo:"imagen1", price:20.000, stock:10}); 
  const productTwo = products.create({title:"Televisor", photo:"imagen2", price:10.000, stock:20});
  const productThree = products.create({title:"Monitor", photo:"imagen3", price:5.000, stock:10});
  console.log(productOne,productTwo,productThree);
  console.log(products.read());
  const one = products.readOne(1);
  const three = products.readOne(5);
  console.log(one, three);