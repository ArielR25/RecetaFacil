const { Router } = require('express');
const router = Router();
const { Ingrediente } = require ('../db.js');

router.post('/ingrediente', async (req, res) => {

    const {
        nombre,
        cantidad,
        unidad,
        cantidadEnvase,
        unidadEnvase,
        precioEnvase,
        id
    } = req.body;

    try {
        console.log(req.body)
        const ingrediente = await Ingrediente.create({
            nombre,
            cantidad,
            unidad,
            cantidadEnvase,
            unidadEnvase,
            precioEnvase,
        })
        ingrediente.setReceta(id)
        console.log(ingrediente)
        return res.status(200).json(ingrediente);

    } catch (error) {
        return res.status(400).json(error)
    }
})

module.exports = router;