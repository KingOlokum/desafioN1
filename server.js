import express from "express";
import products from "./data/fs/products.fs.js";
import users from "./data/fs/users.fs.js";

const server = express();

const PORT = 8080;
const ready = console.log("server ready on port  " + PORT);

//midedlewares son funciones
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.listen(PORT, ready);

//definir endpoints para productos:
// GET /api/products
server.get("/api/products", async (req, res) => {
  try {
    const all = await products.read();
    if (Array.isArray(all)) {
      return res.json({
        statusCode: 200,
        response: all,
      });
    } else {
      return res.json({
        statusCode: 404,
        message: all,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      statusCode: 500,
      message: error.message,
    });
  }
});

// GET /api/products/:pid
//para leer un producto

server.get("/api/products/:pid", async (req, res) => {
  try {
    const { pid } = req.params;
    const one = await products.readOne(pid);
    if (typeof one === "string") {
      return res.json({
        statusCode: 404,
        message: one,
      });
    } else {
      return res.json({
        statusCode: 200,
        response: one,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      statusCode: 500,
      message: error.message,
    });
  }
});

//para eliminar producto

server.delete("/api/products/:eid", async (req, res) => {
  try {
    const { eid } = req.params;
    const response = await products.destroy(eid);
    if (response === "There is not product") {
      return res.json({
        statusCode: 404,
        message: response,
      });
    } else {
      return res.json({
        statusCode: 200,
        response,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      statusCode: 500,
      message: error.message,
    });
  }
});

//definir endpoints para users:
// GET /api/users

server.get("/api/users", async (req, res) => {
  try {
    const all = await users.read();
    if (Array.isArray(all)) {
      return res.json({
        statusCode: 200,
        response: all,
      });
    } else {
      return res.json({
        statusCode: 404,
        message: all,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      statusCode: 500,
      message: error.message,
    });
  }
});

// GET /api/users/:uid
//para leer un usuario
server.get("/api/users/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const one = await users.readOne(uid);
    if (typeof one === "string") {
      return res.json({
        statusCode: 404,
        message: one,
      });
    } else {
      return res.json({
        statusCode: 200,
        response: one,
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      statusCode: 500,
      message: error.message,
    });
  }
});

//para eliminar usuario
