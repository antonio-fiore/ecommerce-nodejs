const ProductModel = require('./product.model');
const fileUploader = require();
const ProductService = {}

ProductService.newProduct = (req,res)=>{
    const newProduct = ProductModel({
        name: req.body.name,
        description: req.body.description,


    });
    newProduct.save((err,data)=>{
        if(err)
        {
            res.status(500).json({ok:false, error: err});
        }
        else
        {
            res.status(201).json({ok:true, message: 'Prodotto aggiunto'});
        }
    });


}

ProductService.deleteProduct = (req,res)=>{

}

ProductService.modifyProduct = (req,res)=>{

}
ProductService.modifyPrice = (req,res)=>
{

}