import fs from "fs";
import crypto from "crypto";

class ProductManager{
    static #products = [];
    init(){
        const exist = fs.existsSync(this.path);
        console.log(exist);
        if(!exist){
            fs.writeFileSync(this.path, JSON.stringify([], null, 2));
        }else {
            ProductManager.#products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
        }
    }
    constructor(path){
        this.path = path;
        this.init();
    }
    async create(data){
        try {
            if(!data.title || !data.photo || !data.price || !data.stock){
                throw new Error("Title, Photo, Price, Stock are required");
            }else{
                const one = {
                    id: crypto.randomBytes(12).toString("hex"),
                    title: data.title,
                    photo: data.photo,
                    price: data.price,
                    stock: data.stock,
                };
                ProductManager.#products.push(one);
                await fs.promises.writeFile(this.path, JSON.stringify
                    (ProductManager.#products, null, 2));
                    console.log("Created ID:"+ one.id);
                return one;
            }
        } catch (error) {
            console.log(error.message);
            return error.message;
            
        }
    }
    read(){
        try {
            if(ProductManager.#products.length === 0){
                throw new Error("There aren't products");
            } else {
                return ProductManager.#products;
                console.log(ProductManager.#products);
            }
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    }
    readOne(id){
        try {
            const one = ProductManager.#products.find((each) => each.id === id);
            if(one) {
                console.log(one);
                return one;
            } else {
                throw new Error("There is not product");
            }
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    }
    async destroy(id){
        try {
            let one = this.products.find((each) => each.id === id);
            if(!one){
                throw new Error("There isn't any product");
                
            }else{
                this.products = this.products.filter((each) => each.id !==id);
                const jsonData = JSON.stringify(this.products, null, 2);
                await fs.promises.writeFile(this.path, jsonData);
                console.log("Delete " + id);
                return id;
            }
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    }
}
const products = new ProductManager("./data/fs/files/products.json");
export default products;




