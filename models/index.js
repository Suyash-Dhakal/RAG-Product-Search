const db = require("../utilities/database");
const Product = require("./product.model");

const setupDatabaseAssociation = async () => {
    // associations

    await db.sync();
    console.log("Database synchronized ..");
}

module.exports = {
    setupDatabaseAssociation,
    Product
}