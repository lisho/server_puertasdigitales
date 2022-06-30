const router = require('express').Router();

/** Traemos el modelo */

const { Ciudadano } = require('../../db/db')

/** Generamos las rutas */

router.get('/',async (req, res) => {
    const ciudadanos = await Ciudadano.findAll();
    res.json(ciudadanos);
})

router.post('/', async (req, res) => {
    const ciudadano = await Ciudadano.create(req.body);
    res.json(ciudadano);
})

router.put('/:ciudadanoId', async (req, res) =>{
    await Ciudadano.update(req.body, {
        where: {id: req.params.ciudadanoId}
    });
    res.json({ success: 'Se ha notificado' });
})

router.delete('/:ciudadanoId', async (req, res) =>{
    await Ciudadano.destroy({
        where: {id: req.params.ciudadanoId}
    });
    res.json({ success: `Se ha borrado el registro` });
})

module.exports = router;