const router = require('express').Router();

/** Traemos el modelo */

const { PerfilProfesional } = require('../../db/db')
console.log(`recibido`)
/** Generamos las rutas */

router.get('/',async (req, res) => {
    const perfiles_profesional = await PerfilProfesional.findAll();
    res.json(perfiles_profesional);
})

router.post('/', async (req, res) => {
    const perfil_profesional = await PerfilProfesional.create(req.body);
    res.json(perfil_profesional);
})

router.put('/:perfil_profesionalId', async (req, res) =>{
    await PerfilProfesional.update(req.body, {
        where: {id: req.params.perfil_profesionalId}
    });
    res.json({ success: 'Se ha notificado' });
})

router.delete('/:perfil_profesionalId', async (req, res) =>{
    await PerfilProfesional.destroy({
        where: {id: req.params.perfil_profesionalId}
    });
    res.json({ success: `Se ha borrado el registro` });
})

module.exports = router;