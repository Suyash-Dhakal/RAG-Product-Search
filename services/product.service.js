const { QueryTypes } = require("sequelize");
const db=require('../utilities/database');
const { v4: uuidv4 } = require('uuid');



const createProduct=async (product,embedding)=>{
    const escapeString = (str) => (typeof str === 'string' ? str.replace(/'/g, "''") : '');

    // unique id for each product
    const id = uuidv4();
    console.log(embedding);
    
    let query=`
    INSERT INTO products (id, title, description, category, brand, size,
    suggestion, allegations, vectorEmbedding, createdAt, updatedAt) VALUES
    ('${id}', '${escapeString(product.title)}', '${escapeString(product.description)}',
    '${escapeString(product.category)}', '${escapeString(product.brand)}',
    '${escapeString(product.size)}', '${escapeString(JSON.stringify(product.suggestion))}',
    '${escapeString(JSON.stringify(product.allegations))}', JSON_ARRAY_PACK("[${embedding}]"),
    NOW(), NOW());
 
    `;

    const creatProduct=await db.query(query,{
        type: QueryTypes.INSERT
    });

    return creatProduct;
}

const searchProduct=async(embedding)=>{
    let selectQuery=`
    SELECT id, title, description, category, brand, size, suggestion, allegations FROM products 
    ORDER BY dot_product(vectorEmbedding, JSON_ARRAY_PACK("[${embedding}]")) DESC 
    LIMIT 5;
    `
    const searchResults = await db.query(selectQuery, {
        type: QueryTypes.SELECT
   });

   return searchResults;
}

module.exports={
    createProduct,
    searchProduct
};


//JSON_ARRAY_PACK() is a function in SingleStore (vector)DB
//that converts a JSON array of zero or more floating 
//point numbers to an encoded blob.