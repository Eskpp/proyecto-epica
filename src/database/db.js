const { Sequelize } = require("sequelize");

const dbname = process.env.DB_NAME;
const dbuser = process.env.DB_USER;
const dbpassword = process.env.DB_PASSWORD;
const dbhost = process.env.DB_HOST;
const dbdialect = process.env.DB_DIALECT;

const sequelize = new Sequelize(dbname, dbuser, dbpassword, {
  host: dbhost,
  dialect: dbdialect
});

const TestConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "se ha realizado satisfactoriamente la conexion a la base de datos"
    );
  } catch (error) {
    console.error("Hubo un fallo en la conexion a la base de datos", error);
  }
};


module.exports = { sequelize, TestConnection };
