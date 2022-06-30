const router = require('express').Router();

/** Traemos el modelo */

const { EtiquetaTipo, Etiqueta } = require('../../db/db')

/** Generamos las rutas */

router.get('/',async (req, res) => {
    const tipo = await EtiquetaTipo.findAll({include: Etiqueta});
    res.json(tipo);
})

router.post('/', async (req, res) => {
    const tipo = await EtiquetaTipo.create(req.body);
    res.json(tipo);
})

router.put('/:tipoId', async (req, res) =>{

    await EtiquetaTipo.update(req.body, {
        where: {id: req.params.tipoId}
    });

    const tipos = await EtiquetaTipo.findByPk(req.body.id);
    res.json(tipos);
})

router.delete('/:tipoId', async (req, res) =>{
    await EtiquetaTipo.destroy({
        where: {id: req.params.tipoId}
    });
    const tipos = await EtiquetaTipo.findAll();
    res.json(tipos);
})

module.exports = router;