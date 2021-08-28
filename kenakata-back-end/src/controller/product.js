const Product = require('../models/product')
const shortid = require('shortid')
const slugify = require('slugify')

exports.createProduct = (req, res) => {
    
    // res.status(200).json({ file: req.files, body: req.body});

    const { name, price, description, category, quantity, createBy } = req.body

    let productPictures = [];


    if(req.files.length > 0){
        productPictures = req.files.map(file => {
            return { img: file.filename}
        });
    };


    const product = new Product({
        name: name,
        slug: slugify(name),
        price,
        quantity,
        description,
        productPictures,
        category,
        createBy: req.user._id
    });

    product.save((error, product) =>{
        if(error) return res.status(400).json({ error});
        if(product){
            res.status(201).json({ product });
        }
    });

};



exports.getProduct = (req, res) =>{
    Product.find({})
    .exec((error, products) =>{
        if(error) return res.status(400).json({ error });

        if(products){

            res.status(200).json({ products });
        }
    })
}
