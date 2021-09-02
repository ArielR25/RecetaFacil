const { Router } = require('express');
const router = Router();
const { Receta, Ingredientes } = require ('../db.js');

router.get('/receta/:id', async (req, res) => {

    try{
        const receta = await Receta.findOne({
            where: {
                id: req.params.id
            }
        },{
            include: Ingredientes
        })
        console.log(receta)
        return res.status(200).json(receta)
    
    }catch(e){
        return res.status(400).json(e)
    }
})

module.exports = router;