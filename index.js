require('dotenv').config();
const express=require('express');
const productRouter = require('./routes/product.router');
const {setupDatabaseAssociation} = require('./models');


const app=express();
const PORT=3000;

setupDatabaseAssociation();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/products', productRouter);

app.use((error, req, res, next) => {
    res.status(500).json({
      message: JSON.stringify(error),
    });
  });


app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
    });