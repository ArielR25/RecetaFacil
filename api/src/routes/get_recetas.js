const { Router } = require('express');
const router = Router();
const { Receta } = require ('../db.js');

router.get('/recetas/:recetaId', async (req, res) => {

    try{
        const receta = Receta.findOne({
            where: {
                id: req.params.recetaId
            }
        })
        return res.status(200).json({asd:"hola"})
    
    }catch(e){
        return res.status(400).json(e)
    }
})

module.exports = router;