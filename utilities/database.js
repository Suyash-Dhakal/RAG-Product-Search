const {Sequelize}=require('sequelize');
// It's a modern TypeScript and Node.js ORM for MySQL, Postgres, Oracle, etc.

const dbName=process.env.DB_NAME;
const dbUser=process.env.DB_USER;
const dbPassword=process.env.DB_PASSWORD;
const dbHost=process.env.DB_HOST;
const dbPort=parseInt(process.env.DB_PORT, 10);

const db = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect:'mysql',
    port:dbPort,
    dialectOptions:{
        ssl:{
            rejectUnauthorized:false
        }
    },
    logging:true
});

module.exports={db};