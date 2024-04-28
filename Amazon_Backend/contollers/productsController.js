const productsModel = require("../models/productsModel.js");

const getAllProducts = async (req, res) => {
  const data = await productsModel.find();
  console.log(req.url);
  res.send({
    status: "success",
    result: 0,
    data: {
      products: data,
    },
  });
};

const addProducts = async (req, res) => {
  try {
    const { _id, ...reqdata } = req.body;
    const data = await productsModel.create(reqdata);
    console.log(data);
    res.json({
      status: "success",
      result: 1,
      data: {
        products: data,
      },
    });
  } catch (err) {
    res.status(403);
    console.log(err);
    res.json({
      status: "fail",
      message: JSON.stringify(err),
    });
  }
};

const replaceProduct = async (req, res) => {
  try {
    const reqId = req.params.id;
    const data = { ...req.body, _id: reqId };
    const result = await productsModel.findOneAndReplace({ _id: reqId }, data);
    res.json({
      status: "success",
      data: {
        products: result,
      },
    });
  } catch (err) {
    res.status(500);
    res.json({
      status: "fail",
      message: JSON.stringify(err),
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const reqId = req.params.id;

    // Use findByIdAndDelete() to find the document by ID and delete it
    const deletedProduct = await productsModel.findByIdAndDelete(reqId);

    if (!deletedProduct) {
      // If no product found with the given ID
      return res.status(404).json({
        status: "fail",
        message: "Product not found",
      });
    }

    res.json({
      status: "success",
      data: {
        product: deletedProduct,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

module.exports = {
  getAllProducts,
  addProducts,
  replaceProduct,
  deleteProduct,
};






