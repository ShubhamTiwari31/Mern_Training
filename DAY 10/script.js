const { json } = require("body-parser");
const express = require("express");
const { copyFileSync } = require("fs");
const fsPromises = require("fs/promises");
const productController = require("./Controllers/productsController");
const usersController = require("./Controllers/usersController");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  // console.log('request recieved...')
  const time = new Date().toLocaleString();
  fsPromises.appendFile("./log.txt", req.url + "\t" + time + "\n");
  next(); //if we donot write this line then it will not move until its work is done
});

const productRouter = express.Router();
const userRouter = express.Router();

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

productRouter.route('/')
  .get(usersController.getUser)
  .post(usersController.replaceUser);

productRouter
  .put(usersController.addUser)
  .delete(usersController.deleteUser);

userRouter
  .get(usersController.getUser)
  .put(usersController.addUser)
  .post(usersController.replaceUser)
  .delete(usersController.deleteUser);

app.listen((1500),()=>{
    console.log("chal la hai");
});

// app.get("/api/products", productController.getAllProducts);
// app.post("/api/products", productController.addProduct);
// app.post("/api/products", productController.replaceProduct);
// app.post("/api/products", productController.deleteProduct);

// app.put("/api/products/:id", async (req, res) => {
//   // console.log(req);
//   const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf8"));
//   // res.send("put is in use.......");
//   const reqId = parseInt(req.params.id);
//   const data = req.body;
//   data.id = reqId;
//   const newArr = arr.map((elem) => {
//     if (elem.id == reqId) return data;
//     else return elem;
//   });
//   // res
//   fsPromises.writeFile("./data.json", JSON.stringify(newArr));
//   res.json({
//     status: "success",
//     results: 1,
//     data: {
//       products: arr,
//     },
//   });
//   console.log(data);
// });

// app.delete("/api/products/:id", async (req, res) => {
//   const reqId = parseInt(req.params.id);
//   const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf8"));
//   const newArr = arr.filter((elem) => {
//     if (elem.id === reqId) return false;
//     else return true;
//   });
//   fsPromises.writeFile("./data.json", JSON.stringify(newArr));
//   res.status(204);
//   res.send({
//     status: "success",
//     data: {
//       newProduct: null,
//     },
//   });
// });

// //...........................................................................................
// app.get("/api/users", (req, res) => {
//   res.status(501);
//   res.json({
//     status: "fual",
//     message: "route  is not yet implemented",
//   });
// });
// app.post("/api/users", (req, res) => {
//   res.status(501);
//   res.json({
//     status: "fual",
//     message: "route  is not yet implemented",
//   });
// });
// app.put("/api/users", (req, res) => {
//   res.status(501);
//   res.json({
//     status: "fual",
//     message: "route  is not yet implemented",
//   });
// });
// app.delete("/api/users", (req, res) => {
//   res.status(501);
//   res.json({
//     status: "fual",
//     message: "route  is not yet implemented",
//   });
// });

// app.listen(1500, () => {
//   console.log("server is running fine .................");
// });
