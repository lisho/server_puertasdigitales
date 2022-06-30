const router = require('express').Router();

/** Traemos el modelo */

const { Etiquetado } = require('../../db/db')

/** Generamos las rutas */

router.get('/',async (req, res) => {
    const users = await User.findAll();
    res.json(users);
})

/* router.post('/', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
})
 */
router.post('/registro', async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
})


router.put('/:userId', async (req, res) =>{
    await User.update(req.body, {
        where: {id: req.params.userId}
    });
    const users = await User.findAll();
    res.json(users);
})

router.delete('/:userId', async (req, res) =>{
    await User.destroy({
        where: {id: req.params.userId}
    });
    const users = await User.findAll();
    res.json(users);
})

module.exports = router;