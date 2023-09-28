const indexRoutes = require("express").Router();

indexRoutes.get('/', (req, res) => {
    res.render('index');
});


module.exports = indexRoutes;