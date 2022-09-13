const ProductModel = require("./product.model");
//const fileUploader = require();
const ProductService = {};

ProductService.newProduct = (req, res) => {
  const newProduct = ProductModel({
    name: req.body.name,
    description: req.body.description,
    images: req.body.images,
    quantity: req.body.quantity,
    reviews: req.body.review,
    price: req.body.price,
  });
  newProduct.save((err, data) => {
    if (err) {
      res.status(500).json({ ok: false, error: err });
    } else {
      res.status(201).json({ ok: true, message: "Prodotto aggiunto" });
    }
  });
};
/*
    @param idProduct
*/

ProductService.deleteProduct = (req, res) => {
  const idProduct = req.body.idProduct;

  ProductModel.remove({ id: idProduct }, (err) => {
    if (err) {
      res.status(500).json({ ok: false, error: err });
    } else {
      res.status(201).json({ ok: true });
    }
  });
};
/*
    @param idProduct
    @param product - Object

*/
ProductService.modifyProduct = (req, res) => {
  if (req.body.product) {
    ProductModel.findByIdAndUpdate(
      req.body.product.id,
      req.body.product,
      { new: true },
      (err, updated) => {
        if (err) {
          res.status(500).json({ ok: false, error: err });
        } else {
          res.status(201).json({ ok: true, newProduct: updated });
        }
      }
    );
  }
};

/*
    @param productId
    @param newPrice
*/
ProductService.modifyPrice = (req, res) => {
  const productId = req.body.productId;
  const newPrice = req.body.newPrice;
  ProductModel.findById(productId, (data, err) => {
    if (err) {
      res.status(500).body({ ok: false, error: err });
    } else {
      if (data) {
        data.price = newPrice;
        data.save((err) => {
          if (err) {
            res.status(500).body({ ok: false, error: err });
          } else {
            res.status(201).body({ ok: true, newPrice: newPrice });
          }
        });
      }
    }
  });
};

ProductService.getProduct = (req, res) => {
  const productId = req.body.productId;

  ProductModel.findById(productId, (data, err) => {
    if (err) {
    } else {
      res.status(20);
    }
  });
};

ProductService.addReview = (req, res) => {
  const productId = req.body.productId;

  ProductModel.findById(productId, (err,data) => {
    if (err) {
        console.log(err);
      res.status(500).json({ ok: false, error: err });
    } else {
      data.reviews.push(req.body.review);
      data.save((err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ ok: false, error: err });
        }
      });
      res.status(201).json({ ok: true });
    }
  });
};

module.exports = ProductService;
