const router = require('express').Router();

/** Importamos los archivos de cada ruta */

const puertasApiRouter = require('./api/puertasApiRouter');
const usersApiRouter = require('./api/usersApiRouter');
const etiquetasApiRouter = require('./api/etiquetasApiRouter');
const etiquetadosApiRouter = require('./api/etiquetadosApiRouter');
const favoritosApiRouter = require('./api/favoritosApiRouter');
const calificacionesApiRouter = require('./api/calificacionesApiRouter');
const etiquetaTiposApiRouter = require('./api/etiquetaTiposApiRouter');
/* const ciudadanosApiRouter = require('./api/ciudadanosApiRouter');
const usersApiRouter = require('./api/usersApiRouter');
const perfilesProfesionalApiRouter = require('./api/perfilesProfesionalApiRouter'); */

const middlewares = require('./middlewares');
/** Redirigimos las rutas */

router.use('/puertas', /*  middlewares.checkToken , */ puertasApiRouter);
router.use('/usuarios', usersApiRouter);
router.use('/etiquetas', etiquetasApiRouter);
router.use('/etiquetados', etiquetadosApiRouter);
router.use('/favoritos', favoritosApiRouter);
router.use('/calificaciones', calificacionesApiRouter);
router.use('/etiquetaTipos', etiquetaTiposApiRouter);
/* router.use('/ciudadanos', ciudadanosApiRouter);
router.use('/users', usersApiRouter);
router.use('/perfilesProfesional', perfilesProfesionalApiRouter);
 */
module.exports = router;