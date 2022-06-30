const router = require('express').Router();

const fs = require("fs");
const multer = require("multer");
var upload = multer({ dest: 'public/images/'});


/** Traemos el modelo */

const { Puerta, Etiqueta, Etiquetado, EtiquetaTipo } = require('../../db/db')

/** Generamos las rutas */

router.post('/foto',upload.single('file'), async (req, res) => {

    fs.renameSync(req.file.path, req.file.destination + req.file.originalname);
 
})


router.get('/etiquetadas/',async (req, res) => {
    const puertas = await Puerta.findAll({include: [{ model: Etiqueta, include: [ EtiquetaTipo ] }], order: [['updatedAt', 'DESC']] });
    console.log(`puertas en server`, puertas)
    res.json(puertas);
    
})

router.post('/filtradas/:puertaId',async (req, res) => {

    console.log(`req`, req)
    const puertas = await Puerta.findAll({include: [{ model: Etiqueta, include: [ EtiquetaTipo ] }], order: [['updatedAt', 'DESC']] });
    console.log(`puertas en server`, puertas)
    res.json(puertas);  
  
})


router.post('/etiquetadas/',async (req, res) => {

    const puerta = await Puerta.create(req.body)
    const etiquetas = await  puerta.addEtiqueta(req.body.etiqueta)
 
    const nuevaPuerta = await Puerta.findOne({
        where: { id: puerta.id },
        include: [{ model: Etiqueta, include: [ EtiquetaTipo ] }]
      });   
    
    res.json(nuevaPuerta); 

  })  


router.put('/:puertaId', async (req, res) =>{

    /* traemos los datos de la puerta que vamos a editar */
    const puerta = await Puerta.findByPk(req.params.puertaId);
    
    /* Eliminamos todas las asociaciones de etiquetas para esta puerta */
    const etiquetas = await puerta.getEtiqueta();
    puerta.removeEtiqueta(etiquetas);

    /* Recorremos las nuevas etiquetas de esta puerta y creamos cada 
    selación entre puerta y etiqueta en etiquetado */
    req.body.etiqueta.forEach( async (etiq) =>{ 
        const etiquetado = {
            puertumId : puerta.id,
            etiquetumId : etiq
        }
        const savedEtiquetados = await Etiquetado.create (etiquetado, {w:1}, {returning:true});
    })

    /* Actualizamos los datos de la puerta */
    await Puerta.update(req.body, {
        where: {id: req.params.puertaId}
    });

    /* Devolvemos la información de la puerta actualizada */
    const puertas = await Puerta.findAll({include: Etiqueta});
    res.json(puertas);
})


router.put('/etiquetadas/:puertaId', async (req, res) =>{

    /* traemos los datos de la puerta que vamos a editar */
    const puerta = await Puerta.findByPk(req.params.puertaId);

    /* Eliminamos todas las asociaciones de etiquetas para esta puerta */
    const etiquetas = await puerta.getEtiqueta();
    await puerta.removeEtiqueta(etiquetas);

    /* çAñadimos las etiquetas */
    const nuevasEtiquetas = await  puerta.addEtiqueta(req.body.etiqueta)
    /* Actualizamos los datos de la puerta */
    await Puerta.update(req.body, {
        where: {id: req.params.puertaId}
    });

    /* Devolvemos la información de la puerta actualizada */
    const puertaModificada = await Puerta.findByPk(puerta.id, {include: [{ model: Etiqueta, include: [ EtiquetaTipo ] }], order: [['updatedAt', 'DESC']]  });
    res.json(puertaModificada);
})


router.delete('/etiquetadas/:puertaId', async (req, res) =>{
    const puerta = await Puerta.destroy({
        where: {id: req.params.puertaId}
    });
/* 
    const etiquetas = await puerta.getEtiqueta();
    await puerta.removeEtiqueta(etiquetas);
 */
    const puertas = await Puerta.findAll({include: [{ model: Etiqueta, include: [ EtiquetaTipo ] }], order: [['updatedAt', 'DESC']] });
    res.json(puertas);
})




module.exports = router;



