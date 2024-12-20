const productsJson = require("../products.json");
const getEmbeddings = require("../utilities/getEmbeddings");
const productService = require("../services/product.service");

const createProducts=async(req,res,next)=>{
    try {
        for(product of productsJson){
            const embedding=await getEmbeddings(product);
            const createProductData=await productService.createProduct(product,embedding);
            //stores all the products (present in products.JSON) 
            // and their vector embeddings in the DB
            console.log("product created ..");
        }

        console.log("All products created ..");
      return res.status(200).json({
        message: "All products created .."
      });

    } catch (error) {
        console.log(error);
        next(error);
    }
}

const searchProducts=async (req,res,next)=>{
    try {
        const {input}=req.body;
        const embedding=await getEmbeddings(input);
        const searchResults=await productService.searchProduct(embedding);
        return res.status(200).json({
            message: "Search Results",
            data: searchResults
          });

    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    createProducts,
    searchProducts
}