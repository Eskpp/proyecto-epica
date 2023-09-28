//EXPRESS
const express = require('express');
//DOTENV
const dotenv = require("dotenv");
dotenv.config();
//DATABASE
const {TestConnection, sequelize} = require("./database/db.js");
//RUTAS
const postRoutes = require("./routes/post.routes.js");
const indexRoutes = require("./routes/index.routes.js");
const morgan = require('morgan');
const path = require("node:path");
const app = express();

const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended : false}));

//configuracion motor de plantillas
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname, 'public')));

app.set("views", path.join(__dirname, "views"));

//test de conexion
TestConnection();

app.use(postRoutes);
app.use(indexRoutes);

app.listen(PORT, () => 
    console.log(`Servidor corriendo y escuchando en el puerto ${PORT}`)
);