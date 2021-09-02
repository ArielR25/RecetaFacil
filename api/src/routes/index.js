const { Router } = require('express');
const router = Router();

const get_receta = require ('./get_receta.js');
const get_recetas = require ('./get_recetas.js');
const post_receta = require ('./post_receta.js');
const post_ingrediente = require ('./post_ingrediente.js');

router.use('/', get_receta);
router.use('/', get_recetas);
router.use('/', post_receta);
router.use('/', post_ingrediente);

module.exports = router;
