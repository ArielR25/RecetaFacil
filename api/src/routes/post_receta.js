const { Router } = require('express');
const router = Router();
const { Receta, Ingrediente } = require('../db.js');

router.post('/receta', async (req, res) => {

    const { nombreReceta, ingredientes } = req.body
    try {
        const receta = await Receta.create({
            nombreReceta
        })
        const ingredientesAgregados =[]
        for(let i=0; i<ingredientes.length; i++) {
            const {
                nombre,
                cantidad,
                unidad,
                cantidadEnvase,
                unidadEnvase,
                precioEnvase
            } = ingredientes[i]
            const listo = await Ingrediente.create({
                nombre,
                cantidad,
                unidad,
                cantidadEnvase,
                unidadEnvase,
                precioEnvase
            })
            ingredientesAgregados.push(listo)
        }
        await receta.addIngredientes(ingredientesAgregados)

        return res.status(200).json({msg: 'Receta guardada con exito'});

    } catch (e) {
        return res.status(400).json(e)
    }
})

module.exports = router;