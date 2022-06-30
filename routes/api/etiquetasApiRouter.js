const router = require('express').Router();

/** Traemos el modelo */

const { Etiqueta, Puerta, EtiquetaTipo } = require('../../db/db')

/** Generamos las rutas */

router.get('/',async (req, res) => {
    const etiquetas = await Etiqueta.findAll({include:[ {model: EtiquetaTipo}]});
    res.json(etiquetas);
})

router.get('/:etiquetaId',async (req, res) => {
    const etiqueta = await Etiqueta.findOne( 
        {where: {id:etiquetaId},
        include: EtiquetaTipo});
    res.json(etiqueta);
})

router.post('/', async (req, res) => {
    const etiqueta = await Etiqueta.create(req.body);
    const etiquetaConTipo = await Etiqueta.findOne( 
        {where: {id:etiqueta.id},
        include: EtiquetaTipo});
    res.json(etiquetaConTipo);
})

router.put('/:etiquetaId', async (req, res) =>{
    await Etiqueta.update(req.body, {
        where: {id: req.params.etiquetaId}
    });
    const etiquetas = await Etiqueta.findByPk(req.body.id, {include: EtiquetaTipo});
    res.json(etiquetas);

})

router.delete('/:etiquetaId', async (req, res) =>{
    await Etiqueta.destroy({
        where: {id: req.params.etiquetaId}
    });
    const etiquetas = await Etiqueta.findAll({include: EtiquetaTipo});
    res.json(etiquetas);
})

module.exports = router;