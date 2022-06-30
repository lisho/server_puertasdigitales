
const router = require('express').Router();
const {sequelize} = require('../../db/db')

const {Tarea} = require('../../db/db')

router.get('/', async (req, res) => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    const tareas = await Tarea.findAll();
    res.json(tareas)
})

router.post('/', async (req, res) => {
  const tarea = await Tarea.create(req.body)
  res.json(tarea)
})

router.put('/:tareaId', async (req, res) => {
  await Tarea.update(req.body, {
    where: {id: req.params.tareaId}
  })
  // Aqui es mejor devolver solo la entrada modificada??
  const tareas = await Tarea.findAll();
  res.json(tareas)
})

router.delete('/:tareaId', async (req, res) => {
  console.log("Peticion de borrado", req)
  await Tarea.destroy({
    where: {id: req.params.tareaId}
  })
  const tareas = await Tarea.findAll();
  res.json(tareas)
})


module.exports = router;